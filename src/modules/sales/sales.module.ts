import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './entities/sale.entity';
import { Book } from '../books/entities/book.entity';
import { BooksModule } from '../books/books.module';
import { BooksService } from '../books/books.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Sale, Book]),
  ],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}
