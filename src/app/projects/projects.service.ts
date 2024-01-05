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
    tags : [Tag.Angular, Tag.NodeJS, Tag.InProgress],
    github : "https://github.com/mouhamadalmounayar/NationsServer.git",
    longDescription: "Welcome to Nations, a groundbreaking social media platform that transcends the conventional, inviting users to create, govern, and thrive in their very own digital nations. More than a social network, Nations is a dynamic space where you can simulate diplomatic procedures, establish nations, invite global citizens, and experience the journey of obtaining nationality in a virtual landscape.",
    image : "../../assets/images/Mushoku Tensei - 11 - Large 04.jpg"
  } , {
    id : 1,
    name : "Simulating a Transmission Chain", 
    description : "Simulating a transmission chain in order to verify theoratical conditions on both emission and reception filters.",
    tags : [Tag.Python, Tag.Done],
    github : "",
    longDescription: "",
    image : "../../assets/images/desktop-wallpaper-electronic-47-electronic-backgrounds-electronic.jpg"
  } , {
    id : 2,
    name : "Poker Game",
    description : "Developing a poker game using object oriented programming principles.",
    tags : [Tag.Java, Tag.Done],
    github : "",
    longDescription: "",
    image : "../../assets/images/gwent-the-witcher-card-game-nithral-uhd-4k-wallpaper.jpg"
  }, {
    id : 3, 
    name : "Portfolio Website", 
    description : "This website!", 
    tags : [Tag.Angular, Tag.Done],
    github : "https://github.com/mouhamadalmounayar/portfolio.git",
    longDescription: "",
    image : "../../assets/images/a5aa75f4-eb5b-42b8-ae8d-7c89332549b6_Main.avif"
  }] 
  getProjects(){
    return this.projects;
  }
  getProjectsNumber(){
    return this.projects.length;
  }
  constructor() { }

}
