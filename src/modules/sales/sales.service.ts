import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sale } from './entities/sale.entity';
import { Repository } from 'typeorm';
import { Book } from '../books/entities/book.entity';

@Injectable()
export class SalesService {

  constructor(
    @InjectRepository(Sale)
    private salesRepository: Repository<Sale>,

    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,

    
  ) {}
  async create(createSaleDto: CreateSaleDto) {
    const book = await this.bookRepository.findOneBy({title: createSaleDto.book});
    if (!book) {
      throw new BadRequestException('Author not found');
    }
    const sale = this.salesRepository.create({ ...createSaleDto, book });
    return this.salesRepository.save(sale);
  }

  async findAll() {
    return await this.salesRepository.find();
  }

  async findOne(id: number) {
    const sale = await this.salesRepository.findOneBy( {id} )
    return sale
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return `This action updates a #${id} sale`;
  }

  remove(id: number) {
    return `This action removes a #${id} sale`; 
   }
}
