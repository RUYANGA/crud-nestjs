import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";


export class creatUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(['USER', 'ADMIN', 'SUPERUSER'],{
        message:'Valid role required'
    })
    role: 'USER' | 'ADMIN' | 'SUPERUSER';
}