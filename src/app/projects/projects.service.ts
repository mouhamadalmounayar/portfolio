import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  getProjectFromServer() : Observable<Project[]>{
    let api = environment.apiUrl + 'getProjects'
    return this.http.get<Project[]>(api)
  }
  constructor(private http : HttpClient) { }

}
