// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IsDefined, IsOptional, IsString } from 'class-validator';

export class CreateAdminDto {
  @IsDefined()
  @IsString()
  public name: string;

  @IsDefined()
  @IsString()
  public username: string;

  @IsDefined()
  @IsString()
  public password: string;

  @IsOptional()
  @IsString()
  public phone_number: string;
}

export class LoginAdminDto {
  @IsDefined()
  @IsString()
  public username: string;

  @IsDefined()
  @IsString()
  public password: string;
}
