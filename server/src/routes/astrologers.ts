import { Router } from 'express';
import { Astrologer } from '../models/Astrologer';
import { astrologerSchema } from '../schemas/astrologer';

const router = Router();

router.get('/', async (_req, res) => {
  const items = await Astrologer.find().sort({ createdAt: -1 });
  res.json(items);
});

router.get('/:id', async (req, res) => {
  const item = await Astrologer.findById(req.params.id);
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json(item);
});

router.post('/', async (req, res) => {
  const result = astrologerSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ errors: result.error.flatten() });
  }
  const created = await Astrologer.create(result.data);
  res.status(201).json(created);
});

router.put('/:id', async (req, res) => {
  const result = astrologerSchema.partial().safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ errors: result.error.flatten() });
  }
  const updated = await Astrologer.findByIdAndUpdate(req.params.id, result.data, { new: true });
  if (!updated) return res.status(404).json({ message: 'Not found' });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  const deleted = await Astrologer.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Not found' });
  res.status(204).send();
});

export default router; 