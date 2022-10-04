// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PupukStatus } from '@prisma/client';
import { IsDefined, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePupukDto {
  @IsDefined()
  @IsString()
  public name: string;

  @IsDefined()
  @IsString()
  public phone_number: string;

  @IsDefined()
  @IsString()
  public address: string;

  @IsDefined()
  @IsNumber()
  public quantity: number;

  @IsDefined()
  @IsNumber()
  public total_price: number;

  @IsOptional()
  @IsEnum(PupukStatus)
  @IsString()
  public status: PupukStatus;

  @IsOptional()
  @IsString()
  public status_description: string;
}

export class UpdatePupukDto {
  @IsOptional()
  @IsString()
  public name: string;

  @IsOptional()
  @IsString()
  public phone_number: string;

  @IsOptional()
  @IsString()
  public address: string;

  @IsOptional()
  @IsString()
  public quantity: number;

  @IsOptional()
  @IsString()
  public total_price: number;

  @IsOptional()
  @IsEnum(PupukStatus)
  @IsString()
  public status: PupukStatus;

  @IsOptional()
  @IsString()
  public status_description: string;
}
