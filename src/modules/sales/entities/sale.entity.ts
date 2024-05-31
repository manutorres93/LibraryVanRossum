import { Book } from "src/modules/books/entities/book.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'sales'})
export class Sale {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    client:string

    @CreateDateColumn()
    saleDate: Date;

    @ManyToOne(()=> Book, (book)=> book.sales, {eager:true})
    book:Book;
   


}
