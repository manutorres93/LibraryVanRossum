import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { AuthorModule } from '../author/author.module';
import { Author } from '../author/entities/author.entity';
import { AuthorService } from '../author/author.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Book]),
    AuthorModule
  ],
  controllers: [BooksController],
  providers: [BooksService, AuthorService],
})
export class BooksModule {}
