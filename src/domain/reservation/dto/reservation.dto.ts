import { IsString, MinLength, MaxLength, IsMongoId } from "class-validator";

export class CreateReservationDto {
  @IsString()
  @MinLength(3)
  @MaxLength(32)
  readonly firstName: string;

  @IsString()
  @MinLength(3)
  @MaxLength(32)
  readonly lastName: string;

  @IsString()
  readonly date: string;
  
  @IsString()
  readonly people: string;
  
  @IsString()
  readonly table_number: string;

}

export class ReservationDto extends CreateReservationDto {
    @IsMongoId()
    readonly _id: string;
}
