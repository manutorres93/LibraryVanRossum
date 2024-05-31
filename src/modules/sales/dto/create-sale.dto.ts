import { IsNotEmpty, IsString } from "class-validator";

export class CreateSaleDto {
 
    @IsNotEmpty()
    @IsString()
    client: string;

    @IsString()
    book: string;
}
