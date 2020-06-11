import { Document } from 'mongoose'

export interface Nota extends Document {
    titulo: string,
    descripcion: string,
    favorito: string,
    createdAt: Date
}