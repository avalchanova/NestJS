import { CreateUserDto } from './DTO/createUserDto';
export declare class UserService {
    findOne(id: string): {
        id: string;
    };
    create(createUseDto: CreateUserDto): string;
}
