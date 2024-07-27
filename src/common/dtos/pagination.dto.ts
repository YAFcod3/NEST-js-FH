import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min} from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  //transformar
  @Type(() => Number)   // equivalente a enableImplicitConversion en el main
  limit?: number;
  @IsOptional()
  @Min(0)
  @Type(() => Number)   // equivalente a enableImplicitConversion en el main
  offset?: number;
}
