import { Author } from 'src/modules/author/entities/author.entity';
import { Column, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'books' })
export class Book {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  title: string;

  @Column()
  pages: number;

  @Column()
  price: number;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(()=> Author, (author)=> author.books, {eager:true})
  author:Author


}
