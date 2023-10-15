import { CreateUserDto } from './DTO/createUserDto';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';
export declare class UserController {
    private readonly userService;
    private readonly commentService;
    constructor(userService: UserService, commentService: CommentService);
    findOne(id: string): {
        id: string;
    };
    create(createUserDto: CreateUserDto): string;
    getUserComments(id: string): string;
}
