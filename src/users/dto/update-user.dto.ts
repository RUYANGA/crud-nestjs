import { creatUserDto } from "./creat-user.dto";
import {PartialType} from '@nestjs/mapped-types'



export class updateUserDto extends PartialType(creatUserDto) {}