import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
// import { UserService } from './user.service';
import { CommentService } from "src/comment/comment.service";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  // updated automatically when nest g co user --no-spec
  providers: [UserService, CommentService],
})
export class UserModule {}
