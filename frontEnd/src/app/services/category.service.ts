import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'models/category';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  


  getCategories(){
    return this.http.get("http://localhost:3000/api/v1/getCategories").pipe(map((res:any)=>{
       return res;
    }))
  }

 
}
