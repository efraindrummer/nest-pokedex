import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {

    //is int, isPOsitive, min 1
    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;
    //isString, 

    @IsString()
    @MinLength(1)
    name: string;
}
