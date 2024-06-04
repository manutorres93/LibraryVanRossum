import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateSaleDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    client: string;

    @ApiProperty()
    @IsString()
    book: string;
}
