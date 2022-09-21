// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IsDefined, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePupukDto {
  @IsDefined()
  @IsString()
  public name: string;

  @IsDefined()
  @IsString()
  public description: string;

  @IsDefined()
  @IsNumber()
  public price: number;

  @IsDefined()
  @IsString()
  public sender_address: string;

  @IsDefined()
  @IsString()
  public phone_number: string;
}

export class UpdatePupukDto {
  @IsOptional()
  @IsString()
  public name: string;

  @IsOptional()
  @IsString()
  public description: string;

  @IsOptional()
  @IsNumber()
  public price: number;

  @IsOptional()
  @IsString()
  public sender_address: string;

  @IsOptional()
  @IsString()
  public phone_number: string;
}
