import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  appComp:boolean=true;
  login=false;
  sign=false;

  constructor(private router : Router) { }

  ngOnInit(): void {
    
  }
  naviLogin(){
    this.router.navigate(["login/"]);
    this.login=true
  }

  naviSign(){
    this.router.navigate(["signUp/"])
  }
}

