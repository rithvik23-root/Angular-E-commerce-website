import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }


  addUser(user:User){
    return this.http.post("http://localhost:3000/api/v1/addUser",user)
  }

  checkUser(user:User){
    return this.http.post("http://localhost:3000/api/v1/login",user)
  }
}
