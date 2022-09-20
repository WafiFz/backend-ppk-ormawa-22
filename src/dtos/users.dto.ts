// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IsDefined, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsDefined()
  @IsString()
  public name: string;

  @IsDefined()
  @IsEmail()
  public email: string;

  @IsDefined()
  @IsString()
  public password: string;

  @IsDefined()
  @IsString()
  public phone_number: string;

  @IsDefined()
  @IsString()
  public rt: string;

  @IsDefined()
  @IsString()
  public rw: string;
}

export class LoginUserDto {
  @IsDefined()
  @IsEmail()
  public email: string;

  @IsDefined()
  @IsString()
  public password: string;
}
