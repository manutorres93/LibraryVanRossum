//import {  ApiProperty } from '@nestjs/swagger';
import { Book } from 'src/modules/books/entities/book.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'authors' })
export class Author {
    
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @OneToMany(()=> Book, (book)=> book.author)
  book:Book[]



}
