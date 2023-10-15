import { Injectable } from "@nestjs/common";
import { CreateUserDto, UpdateUserDto } from "./DTO/createUserDto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";

@Injectable() //injectable means that this UserService is now a provider
// providers inside nestjs can be injected inside other inside the module scope
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>
  ) {}
  async findOne(id: number) {
    return await this.userRepo.findOne({ where: { id: id } });
  }

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepo.create(createUserDto);
    return await this.userRepo.save(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepo.update(id, updateUserDto);
  }
}

// we can use the userService only in the User Module
// unless we import the userService inside the providers list inside the comment.module.ts
