import { Routes } from '@angular/router';

export const routes: Routes = [
{path : 'Home' , loadComponent : () =>  import('./home/home.component').then(mod => mod.HomeComponent)}, 
{path : 'Resume', loadComponent : () => import('./resume/resume.component').then(mod => mod.ResumeComponent)},
{path : 'Contact' , loadComponent : () => import ('./contact/contact.component').then(mod => mod.ContactComponent)},
{path : 'Projects' , loadComponent : () => import ('./projects/projects.component').then(mod => mod.ProjectsComponent)}
];
