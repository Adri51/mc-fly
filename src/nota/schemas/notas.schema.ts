import { Schema } from 'mongoose'

export const NotaSchema = new Schema({
    titulo: String,
    descripcion: String,
    favorito: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

