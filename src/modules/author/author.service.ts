import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {

  constructor(
    @InjectRepository(Author)
    private readonly authorRepoitory: Repository<Author>,
  ) {}

  
  async create(createAuthorDto: CreateAuthorDto) {
    const author = this.authorRepoitory.create(createAuthorDto)
    return await this.authorRepoitory.save(author)
  }

  async findAll() {
    return await this.authorRepoitory.find();
  }

  async findOne(id: number) {
    const author = await this.authorRepoitory.findOneBy( {id} )
    return author
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    const author= await this.authorRepoitory.findOneBy({id})
    this.authorRepoitory.merge(author, updateAuthorDto)
    return await this.authorRepoitory.save(author)
  }

  async remove(id: number) {
    return await this.authorRepoitory.softDelete({id})
  }
}
