import { IsString, IsNumber } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsNumber()
  pages: number;

  @IsNumber()
  price: number;
}
