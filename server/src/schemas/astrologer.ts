import { z } from 'zod';

export const planSchema = z.object({
  label: z.string().min(1),
  minutes: z.number().int().nonnegative(),
  discount: z.string().optional(),
  price: z.number().nonnegative(),
  oldPrice: z.number().nonnegative().optional(),
  connect: z.string().optional(),
  rating: z.number().min(0).max(5).optional(),
});

export const astrologerSchema = z.object({
  name: z.string().min(1),
  expertise: z.string().optional(),
  languages: z.array(z.string()).optional(),
  reviews: z.number().int().nonnegative().optional(),
  rating: z.number().min(0).max(5).optional(),
  experience: z.number().int().nonnegative().optional(),
  avatar: z.string().url().optional(),
  plans: z.array(planSchema).optional(),
  specializations: z.array(z.string()).optional(),
  about: z.string().optional(),
  gallery: z.array(z.string().url()).optional(),
});

export type AstrologerInput = z.infer<typeof astrologerSchema>; 