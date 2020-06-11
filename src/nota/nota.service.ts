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


    notaFavorita() {


    }

    getFavoritas() {

    }
}
