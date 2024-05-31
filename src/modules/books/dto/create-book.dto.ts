import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsNumber()
  pages: number;

  @IsNumber()
  price: number;

  @IsString()
  authorName: string; //si lo dejo solo en author falla porque cree que v aa recobir un tipo Author

}
