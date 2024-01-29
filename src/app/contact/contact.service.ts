import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = environment.apiUrl
  constructor(private http: HttpClient) { }
  submitForm(formData: any): Observable<any> {
    return this.http.post(this.apiUrl + "message", formData)
  }
}
