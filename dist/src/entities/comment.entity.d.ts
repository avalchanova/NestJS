import { User } from "./user.entity";
import { Topic } from "./topic.entity";
export declare class Comment {
    id: number;
    text: string;
    user: User;
    topic: Topic;
}
