import { IsBoolean, IsNumber, IsOptional, IsPositive, Min } from "class-validator";
import { TransformToBoolean } from "../helpers/TransformBooleanDecorator";

export class PaginationDto {

    @IsOptional()
    @IsPositive()
    @IsNumber()
    @Min(1)
    limit?: number;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    offset?: number;

    @IsOptional()
    @TransformToBoolean()
    @IsBoolean()
    active?: boolean;
}

/* Si alguno de ustedes NO quiere aplicar esta regla al main, ya sea por performance u otro motivo, les recomiendo "declarar el tipo en la clase PaginationDto" */

/*
    export class PaginationDto {
    
    @IsOptional()
    @IsPositive()
    @IsNumber()
    @Min(1)
    @Type(() => Number)
    limit?: number;
 
    @IsOptional()
    @IsPositive()
    @IsNumber()
    @Type(() => Number)
    offset?: number;

    Con esto evitamos la delación global en el main y mantenemos un control nosotros.
}
*/

// OTRA FORMA 

/*
export class PaginationDto {
    
    @Transform(({ value }) => toNumber(value)) 
    @IsOptional()
    @IsPositive()
    @IsNumber()
    @Min(1)
    limit?: number;
 
    @Transform(({ value }) => toNumber(value)) 
    @IsOptional()
    @IsPositive()
    @IsNumber()
    offset?: number;

    Lo siguiente que se hace es poner un decorator llamado @Transform en el fichero DTO, el cual recibe una callback y que va a llamar la funcion toNumber() creada anteriormente

}
*/
