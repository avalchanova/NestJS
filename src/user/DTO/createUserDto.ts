import { IsEmail, IsNumberString, IsString } from 'class-validator';

export class CreateUserDto {
  // we use the class-validator we installed with npm
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNumberString()
  phone: string;
}

//the amazing this is that the class-validators check and return errors if there is a missed field
//it is on-the-go error handling <3
