import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotaModule } from './nota/nota.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [NotaModule, MongooseModule.forRoot('mongodb://localhost/notas-nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
