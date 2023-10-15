import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
// import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  // updated automatically when nest g co user --no-spec
  providers: [UserService, CommentService],
})
export class UserModule {}
