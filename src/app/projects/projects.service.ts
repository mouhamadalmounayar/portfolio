import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { Tag } from '../models/Tag'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects : Project[]  =  [{
    id : 0, 
    name : "Nations", 
    description : "A social media website where real life procedures apply. Be your own president!", 
    tags : [Tag.Angular, Tag.NodeJS, Tag.InProgress]      
  } , {
    id : 1,
    name : "Simulating a transmission Chain", 
    description : "Simulating a transmission chain in order to verify theoratical conditions on both emission and reception filters.",
    tags : [Tag.Python, Tag.Done]
  } , {
    id : 2,
    name : "Poker Game",
    description : "Developing a poker game using object oriented programming principles.",
    tags : [Tag.Java, Tag.Done]
  }, {
    id : 3, 
    name : "Portfolio Website", 
    description : "This website!", 
    tags : [Tag.Angular, Tag.Done]
  }] 
  getProjects(){
    return this.projects;
  }
  getProjectsNumber(){
    return this.projects.length;
  }
  constructor() { }

}
