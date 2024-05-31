import { IsString, IsNumber } from 'class-validator';
export class CreateAuthorDto {

  @IsString()
  name: string;
  
}
