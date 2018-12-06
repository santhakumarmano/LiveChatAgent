import { Component, OnInit } from '@angular/core';
import { LoginService}from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor( private LoginService:LoginService) { }
 public listofdata;
  ngOnInit() {
  }

  showConfig() {

    this.LoginService.getConfig()
      .subscribe(data => this.listofdata = {
          heroesUrl: data['heroesUrl'],
          textfile:  data['textfile']
      });
     
  }
}
