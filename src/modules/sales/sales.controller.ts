import { Controller, Get, Post, Body, Patch, Param, Delete, Query, BadRequestException, UseGuards } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { SearchSaleDto } from './dto/search-sale.dto';
import { ApiTags } from '@nestjs/swagger';
import { SalesTimeGuard } from 'src/guards/sales-time/sales-time.guard';
import { NoSalesDuringHours } from 'src/decorators/time.decorator';

@ApiTags('sales')
@Controller('sales')
@UseGuards(SalesTimeGuard)
export class SalesController {
  constructor(private readonly salesService: SalesService) {}
//cuando no uso setmetadata tengo que poner el useguards aqui
  @NoSalesDuringHours()
  @Post()
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.salesService.create(createSaleDto);
  }

    /* @Get('search')
  findByParam(@Query('term') searchTerm: string,
  @Query('orderBy') orderBy: string,
    @Query('order') order:'ASC' | 'DESC' = 'ASC',
    @Query('page')page: number,
    @Query('pageSize') pageSize: number,
    @Query('column') column: string) {
    return this.athletesService.findByParam(searchTerm,orderBy, order,page, pageSize, column);
  } */

 /*  @Get('search')
  findByParam(@Query('nameClient') client: string) {
    return this.salesService.findByParam(client);
  } */

  @Get('search')
  async findByParam(@Query() searchSaleDto: SearchSaleDto) {
    try {
      const { searchTerm, orderBy, order, page, pageSize, columnName } = searchSaleDto;
      
      return await this.salesService.findByParam(searchTerm,orderBy, order,page, pageSize, columnName);
    } catch (error) {

      throw new BadRequestException('Failed to search athletes', error.message);
      
    }
    
    
  }

  @Get()
  findAll() {
    return this.salesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.salesService.update(+id, updateSaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesService.remove(+id);
  }

}
