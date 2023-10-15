import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { CommentModule } from './comment/comment.module';
import { CommentService } from './comment/comment.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';

@Module({
  //   imports: [UserModule],
  // when we use nest commands in the terminal to create a module, it comes in the imports automatically
  controllers: [UserController],
  // in the controller we define our API routes
  providers: [UserService, CommentService],
  imports: [UserModule, CommentModule, TypeOrmModule.forRoot(config)],
  // we define our logic
})
export class AppModule { }
