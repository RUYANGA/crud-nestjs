import { Body, Controller, Delete, Get, Param, Patch, Post, Query,ParseIntPipe ,ValidationPipe} from '@nestjs/common';
import { UsersService } from './users.service'; 
import { creatUserDto } from './dto/creat-user.dto';
import { updateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly user:UsersService){}

    @Get()
    findAll(@Query('role') role?:'ADMIN' | 'USER' |'SUPERUSER'){
        return this.user.findAll(role)

    };

    @Get(':id')
    findone(@Param('id' ,ParseIntPipe) id:number){
        return this.user.findById(id)
    } 

     @Post('create')
     create(@Body(ValidationPipe) user:creatUserDto) {
        return this.user.creat(user)
     }

     @Patch(':id')
     update(@Param('id',ParseIntPipe) id:number, @Body(ValidationPipe) updateUser:updateUserDto){
        return this.user.update(id,updateUser)
     }

     @Delete(':id')
     delete(@Param('id',ParseIntPipe) id:number){
        return this.user.delete(id)
     }

}
