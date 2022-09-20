// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IsDefined, IsNumber, IsString } from 'class-validator';

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
