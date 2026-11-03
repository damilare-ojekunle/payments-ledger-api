import {
  IsNotEmpty,
  IsString,
  IsISO4217CurrencyCode,
  MaxLength,
  IsNumber,
} from 'class-validator';

export class CreateAccountDTO {
  @IsNotEmpty({ message: 'Account Name should not be empty' })
  @IsString()
  @MaxLength(100)
  accountName: string;
  @IsNotEmpty({ message: 'Currency should not be empty' })
  @IsISO4217CurrencyCode()
  currency: string;
}
