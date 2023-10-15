import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './DTO/createUserDto';

@Injectable() //injectable means that this UserService is now a provider
// providers inside nestjs can be injected inside other inside the module scope
export class UserService {
  findOne(id: string) {
    return {
      id: id,
    };
  }

  create(createUseDto: CreateUserDto){
    return 'the user is created';
  }
}

// we can use the userService only in the User Module
// unless we import the userService inside the providers list inside the comment.module.ts
