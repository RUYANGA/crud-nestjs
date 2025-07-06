import { Injectable } from '@nestjs/common';
import {creatUserDto} from './dto/creat-user.dto'
import { updateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users=[
        {
            "id":1,
            "name":"merci",
            "role":"ADMIN"
        },
        {
            "id":2,
            "name":"RUYANGA",
            "role":"USER"
        },
        {
            "id":3,
            "name":"Eric",
            "role":"SUPERUSER"
        },
        {
            "id":4,
            "name":"Dinna",
            "role":"ADMIN",
        }
    ]
    findAll(role?:'ADMIN'|'USER'|'SUPERUSER'){
        if(role){
            return this.users.filter(user=> user.role=== role)
        }
        return this.users
    };

    findById(id:number){
        const user =this.users.find(user=> user.id === id)
        return user
    };
    
    creat(user:creatUserDto){
        const id =[...this.users].sort((a,b)=>b.id-a.id)

        const Newuser={
            id:id[0].id + 1,
            ...user
        }
        this.users.push(Newuser)

        return Newuser
    }
    update(id:number,updateUser:updateUserDto){
        this.users=this.users.map(user=>{
            if(user.id === id){
                return {...user,...updateUser}
            }

            return user
        })
        return this.findById(id)
    }

    delete(id:number){

        const removeUser=this.findById(id)
        this.users=this.users.filter(user=> user.id !==id)

        return removeUser
    }

}
