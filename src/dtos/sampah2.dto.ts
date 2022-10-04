// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IsDefined, IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { SampahCategory, SampahSchedule, SampahStatus, User } from '@prisma/client';

export class CreateSampahDto {
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
  @IsString()
  public address_notes: string;

  @IsDefined()
  @IsEnum(SampahCategory)
  @IsString()
  public sampah_category: SampahCategory;

  @IsDefined()
  @IsEnum(SampahSchedule)
  @IsString()
  public schedule_pickup: SampahSchedule;

  @IsOptional()
  @IsEnum(SampahStatus)
  @IsString()
  public status: SampahStatus;

  @IsOptional()
  @IsString()
  public status_description: string;

  @IsDefined()
  @IsUUID()
  public user_id: string;
}

export class UpdateSampahDto {
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
  public address_notes: string;

  @IsOptional()
  @IsEnum(SampahCategory)
  @IsString()
  public sampah_category: SampahCategory;

  @IsOptional()
  @IsEnum(SampahSchedule)
  @IsString()
  public schedule_pickup: SampahSchedule;

  @IsOptional()
  @IsEnum(SampahStatus)
  @IsString()
  public status: SampahStatus;

  @IsOptional()
  @IsString()
  public status_description: string;

  @IsOptional()
  @IsUUID()
  public user_id: string;
}
