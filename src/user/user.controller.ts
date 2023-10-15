import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto, UpdateUserDto } from "./DTO/createUserDto";
import { UserService } from "./user.service";
import { CommentService } from "src/comment/comment.service";

@Controller("user") // every API route inside this controller will start with /user
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly commentService: CommentService
  ) {}
  // since the UserService is decorated with the injectable decorator we can
  // deligate creating an instance of this UserService to the nestjs runtime
  // the CommentService will blow an error if we do not go in the user.module.ts
  // and include the CommentService inside the providers

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(":id/comments")
  getUserComments(@Param("id") id: string) {
    return this.commentService.findUserComments(id);
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  // @Patch()
  // @Put()
  // @Delete()
}

// DTO: data transfer object
