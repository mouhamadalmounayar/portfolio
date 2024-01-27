import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {LoginComponent} from "./login/login.component";
import {AddProjectComponent} from "./add-project/add-project.component";

export const routes: Routes = [
    {path: '' , component : HomeComponent},
    {path : 'Projects' , component : ProjectsComponent},
    {path : 'Contact' , component : ContactComponent},
    {path : 'login' , component : LoginComponent},
    {path : 'addProject' , component: AddProjectComponent}
];

