import { CreateUserDto, UpdateUserDto } from "./DTO/createUserDto";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
export declare class UserService {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    findOne(id: number): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
}
