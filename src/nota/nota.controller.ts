import { Controller, Get, Post, Put, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CreateProductDTO } from './dto/nota.dto'

import { NotaService } from './nota.service';

@Controller('nota')
export class NotaController {

    constructor(private notaService: NotaService) { }

    // http://localhost:3000/nota/create

    @Post('/create')
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
        // console.log(createProductDTO);
        const nota = await this.notaService.crearNota(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Nota Creada',
            nota
        })
    }

    // http://localhost:3000/nota/

    @Get('/')
    async getNotas(@Res() res) {
        const notas = await this.notaService.getNotas();
        res.status(HttpStatus.OK).json(notas);
    }

    // http://localhost:3000/nota/nota(ID)

    @Get('/:notaID')
    async getNota(@Res() res, @Param('notaID') notaID) {
        const nota = await this.notaService.getNota(notaID);
        if (!nota) throw new NotFoundException('No existe la nota que buscas')
        return res.status(HttpStatus.OK).json(nota)
    }


    // http://localhost:3000/nota/update?notaID=(ID)

    @Put('/update')
    async updateProduct(@Res() res, @Body() createnoteDTO: CreateProductDTO, @Query('notaID') notaID) {
        const updatedNote = this.notaService.updateNote(notaID, createnoteDTO);
        if (!updatedNote) throw new NotFoundException('No existe la nota que buscas')
        return res.status(HttpStatus.OK).json({
            message: 'Cambiado',
            updatedNote
        })
    }




    // @Get('/favorito')
    // async getFavoritos(@Res() res, @Param('favorito') favorito: string) {
    //     const notas = await this.notaService.buscarFavoritos(favorito);
    //     return res.status(HttpStatus.OK).json(notas);
    // }



}
