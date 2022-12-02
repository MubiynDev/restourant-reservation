import { IsString, MinLength, MaxLength, IsMongoId } from "class-validator";

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(32)
  readonly username: string;

  @IsString()
  readonly password: string;
}

export class UserDto extends CreateUserDto {
  @IsMongoId()
  readonly _id: string;
}
