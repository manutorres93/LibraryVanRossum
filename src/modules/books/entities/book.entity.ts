import { Author } from 'src/modules/author/entities/author.entity';
import { Sale } from 'src/modules/sales/entities/sale.entity';
import { Column, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany(()=> Sale, (sale)=> sale.book)
  sales:Sale[]


}
