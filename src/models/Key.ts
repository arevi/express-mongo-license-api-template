import { Schema, model, Document } from "mongoose";

/**
 * Interface for defining Key
 */
export interface IKey extends Document {
  key: string;
  machineId: string | null;
  createdDate: Date;
}

/**
 * Schema to handle keys
 */
const keySchema = new Schema({
  key: {
    type: String,
    required: true,
    unique: true,
  },
  machineId: {
    type: String,
    required: false,
    unique: false,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

export const Key = model<IKey>("Key", keySchema);
