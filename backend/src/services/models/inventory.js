import mongoose, { Schema } from 'mongoose';

const inventorySchema = new Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    suppliers: [{ type: Schema.ObjectId, ref: 'Suppliers' }] // Permite múltiples proveedores
});

export const Inventory = mongoose.model('Inventory', inventorySchema);
