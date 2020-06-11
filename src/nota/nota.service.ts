import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Nota } from './interfaces/nota.interfaces';
import { CreateProductDTO } from './dto/nota.dto';

@Injectable()
export class NotaService {

    constructor(@InjectModel('Nota') private notaModel: Model<Nota>) { }


    async getNotas(): Promise<Nota[]> {
        const notas = await this.notaModel.find()
        return notas;
    }

    async crearNota(createNoteDTO: CreateProductDTO): Promise<Nota> {
        const nota = new this.notaModel(createNoteDTO);
        return await nota.save()
    }

    async getNota(notaID: string): Promise<Nota> {
        const nota = await this.notaModel.findById(notaID);
        return nota;
    }

    async updateNote(noteID: string, createNoteDTO: CreateProductDTO): Promise<Nota> {
        const updateNote = this.notaModel.findByIdAndupdate(noteID, createNoteDTO, { new: true });
        return updateNote
    }

    async getfavorito(favorito: string): Promise<Nota> {
        const nota = await this.notaModel.find(favorito);
        return nota;
    }

    // async buscarFavoritos(favorito: String): Promise<Nota> {
    //     const favoritos = this.notaModel.find({ where: { favorito: "true" } });
    //     console.log(favorito)
    //     return favoritos
    // }
}
