import { Module } from '@nestjs/common';
import { NotaController } from './nota.controller';
import { NotaService } from './nota.service';

import { MongooseModule, Schema } from '@nestjs/mongoose';
import { NotaSchema } from './schemas/notas.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Nota', schema: NotaSchema }
    ])

  ],
  controllers: [NotaController],
  providers: [NotaService]
})
export class NotaModule { }
