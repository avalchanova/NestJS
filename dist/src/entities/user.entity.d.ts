import { Comment } from "./comment.entity";
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    comments: Comment[];
    hashPassword(): Promise<void>;
}
