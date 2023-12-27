import { Tag } from "./Tag";

export interface Project {
    id: number; 
    name: string;
    description: string;
    tags : Tag[]; 
}