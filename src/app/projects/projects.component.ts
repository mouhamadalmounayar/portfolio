import { Component } from '@angular/core';
import { Project } from '../models/Project';
import { Tag } from '../models/Tag';
import { CardProjectsComponent } from '../card-projects/card-projects.component';
import { NgFor } from '@angular/common';
import { ProjectsService } from './projects.service';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardProjectsComponent, NgFor, ProjectModalComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
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
        this.filteredProjects = this.getProjects().filter(project => project.tags.toString().toLowerCase().includes
        (text.toLowerCase()))
      }
    }
    
}
