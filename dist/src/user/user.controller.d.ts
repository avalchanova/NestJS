import { CreateUserDto, UpdateUserDto } from "./DTO/createUserDto";
import { UserService } from "./user.service";
import { CommentService } from "src/comment/comment.service";
export declare class UserController {
    private readonly userService;
    private readonly commentService;
    constructor(userService: UserService, commentService: CommentService);
    findOne(id: number): Promise<import("../entities/user.entity").User>;
    create(createUserDto: CreateUserDto): Promise<import("../entities/user.entity").User>;
    getUserComments(id: string): string;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
}
