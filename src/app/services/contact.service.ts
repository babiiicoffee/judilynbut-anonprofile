import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { } 

  URL = "http://localhost:8080/api/sendEmail";

  /*
  *function sendEmail
  * params: data
  * type: Observable
  */ 
  sendEmail(data): Observable<any> {
    return this.httpClient.post<any>(this.URL, data);
  }
}
