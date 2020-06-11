import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';

import { CreateProductDTO } from './dto/nota.dto'

import { NotaService } from './nota.service';

@Controller('nota')
export class NotaController {

    constructor(private notaService: NotaService) { }

    @Post('/create')
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
        // console.log(createProductDTO);
        const nota = await this.notaService.crearNota(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Nota Creada',
            nota
        })
    }

    @Get('/')
    async getNotas(@Res() res) {
        const notas = await this.notaService.getNotas();
        res.status(HttpStatus.OK).json({
            notas
        })
    }
}
