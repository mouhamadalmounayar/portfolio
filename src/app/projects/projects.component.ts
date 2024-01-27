import {Component, OnInit} from '@angular/core';
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
export class ProjectsComponent implements OnInit {
    projects : Project[]
    filteredProjects : Project[] ;

    ngOnInit() {
      this.getProjects()
    }

  constructor(private _projectService : ProjectsService){
    }
    getProjects(): void {
      this._projectService.getProjectFromServer().subscribe(projects => {
        this.projects = projects
        this.filteredProjects = projects
      });
    }
    filterProjects(text : string){
      if (!text){
        this.filteredProjects = this.projects;
      }
      else{
        this.filteredProjects = this.projects.filter(project => project.name.toLowerCase().includes
        (text.toLowerCase()))
      }
    }
}
