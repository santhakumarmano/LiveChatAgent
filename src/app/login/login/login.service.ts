import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  constructor(private http: HttpClient) { }
  getConfig() {
    return this.http.get('http://192.168.99.1:5000/Live_chat_Agent_login');
  }
}
