import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { Author } from '../author/entities/author.entity';

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,

    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  
  
  async create(createBookDto: CreateBookDto) : Promise<Book> {
    const author = await this.authorRepository.findOneBy({name: createBookDto.authorName});
    if (!author) {
      throw new BadRequestException('Author not found');
    }
    const book = this.bookRepository.create({ ...createBookDto, author });
    return this.bookRepository.save(book);
  }

  async findAll() {
    return await this.bookRepository.find();
  }

  async findOne(id: number) {
    const book = await this.bookRepository.findOneBy( {id} )
    return book
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const book= await this.bookRepository.findOneBy({id})
    if(!book){
      throw new BadRequestException('Book not found')
    }

    let author;

    if (updateBookDto.authorName) {
      const author = await this.authorRepository.findOneBy({ name: updateBookDto.authorName });
      if (!author) {
        throw new BadRequestException('Author not found');
      }
      book.author = author; // Asignar el autor al libro si se proporciona authorName
    }


    this.bookRepository.merge(book, updateBookDto);
  return await this.bookRepository.save(book);
  }

  async remove(id: number) {
    /* await this.bookRepository.delete({id}) */
    return await this.bookRepository.softDelete({id}) //se va a la BD y le pone fecha al DeleteDateColumn
  }
}
