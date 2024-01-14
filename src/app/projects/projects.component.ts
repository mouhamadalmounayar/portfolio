import { Component } from '@angular/core';
import { Project } from '../models/Project';
import { CardProjectsComponent } from '../card-projects/card-projects.component';
import { NgFor } from '@angular/common';
import { ProjectsService } from './projects.service';
import { projectsAnimation } from '../animations/projectsAnimations';




@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardProjectsComponent, NgFor, ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  animations: [projectsAnimation], 
})
export class ProjectsComponent {
    filteredProjects : Project[] = [];
    constructor(private _projectService : ProjectsService){
      this.filteredProjects = this.getProjects();
    }
    getProjects(){
      return this._projectService.getProjects();
    }
    filterProjects(text : string){
      if (!text){
        this.filteredProjects = this.getProjects();
      }
      else{
        this.filteredProjects = this.getProjects().filter(project => project.name.toLowerCase().includes
        (text.toLowerCase()))
      }
    }
}
