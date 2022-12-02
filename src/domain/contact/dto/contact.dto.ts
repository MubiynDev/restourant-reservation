import { IsString, MinLength, MaxLength, IsMongoId, IsEmail } from "class-validator";

export class ContactDto {
  @IsString()
  @MinLength(3)
  @MaxLength(32)
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly phone: string;

  @IsString()
  @MinLength(3)
  readonly message: string;


}

