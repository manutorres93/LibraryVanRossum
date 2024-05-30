import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { AuthorModule } from '../author/author.module';
import { Author } from '../author/entities/author.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Book, Author]),
    AuthorModule
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
