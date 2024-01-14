import { Tag } from "./Tag";

export interface Project {
    id: number; 
    name: string;
    description: string;
    tags : Tag[]; 
    github: string;
    longDescription : string;
    image : string;
}