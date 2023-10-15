import { Comment } from "./comment.entity";
export declare class Topic {
    id: number;
    title: string;
    description: string;
    comments: Comment[];
}
