import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, ObservedValueOf} from "rxjs";
import {environment} from "../../environments/environment";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AddProjectService {

  constructor(private http : HttpClient , private cookieService : CookieService) { }
  submit(form : any): Observable<any>{
    const token = this.cookieService.get('token')
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer ' + token
    }
    )
    let api = environment.apiUrl + 'addProject'
    return this.http.post(api , form, {headers})
  }
  submitDelete() : Observable<any>{
    const token = this.cookieService.get('token')
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer ' + token
    })
    let api : string = environment.apiUrl + 'deleteProject'
    return this.http.delete(api , {headers})
  }
}


