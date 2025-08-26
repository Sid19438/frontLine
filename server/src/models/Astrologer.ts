import mongoose, { Schema, Document, Model } from 'mongoose';

interface Plan {
  label: string;
  minutes: number;
  discount?: string;
  price: number;
  oldPrice?: number;
  connect?: string;
  rating?: number;
}

export interface AstrologerDocument extends Document {
  name: string;
  expertise?: string;
  languages?: string[];
  reviews?: number;
  rating?: number;
  experience?: number;
  avatar?: string;
  plans?: Plan[];
  specializations?: string[];
  about?: string;
  gallery?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const PlanSchema = new Schema<Plan>({
  label: { type: String, required: true, trim: true },
  minutes: { type: Number, required: true, min: 0 },
  discount: { type: String },
  price: { type: Number, required: true, min: 0 },
  oldPrice: { type: Number, min: 0 },
  connect: { type: String },
  rating: { type: Number, min: 0, max: 5 },
}, { _id: false });

const AstrologerSchema = new Schema<AstrologerDocument>({
  name: { type: String, required: true, trim: true, index: true },
  expertise: { type: String, trim: true },
  languages: { type: [String], default: [] },
  reviews: { type: Number, default: 0, min: 0 },
  rating: { type: Number, default: 0, min: 0, max: 5 },
  experience: { type: Number, default: 0, min: 0 },
  avatar: { type: String, trim: true },
  plans: { type: [PlanSchema], default: [] },
  specializations: { type: [String], default: [] },
  about: { type: String },
  gallery: { type: [String], default: [] },
}, { timestamps: true });

export const Astrologer: Model<AstrologerDocument> = mongoose.model<AstrologerDocument>('Astrologer', AstrologerSchema); 