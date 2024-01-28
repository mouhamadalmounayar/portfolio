import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {CookieOptions} from "express";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login(password : any) : void {
    let api = environment.apiUrl + '/login'
    this.http.post(api, {password : password} , {responseType : "text"} ).subscribe(response => {
      if (response) {
        this.cookieService.set('token', response)
        alert("Login was successful")
      }
    })
  }
  constructor (private http : HttpClient , private cookieService : CookieService) {}
}
