import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
import { Product } from 'models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get("http://localhost:3000/api/v1/getProducts")
    .pipe(map((res:any)=>{
    return res;
    }))
  }

  deleteProduct(id){
   
     return this.http.delete(`http://localhost:3000/api/v1/deleteProduct/${id}`,{responseType:"text"})
  }

  editProduct(id,product:Product){
      return this.http.put(`http://localhost:3000/api/v1/updateProduct/${id}`,product,{responseType:"text"})
  }

  getCategoryProducts(category:string){
    return this.http.get(`http://localhost:3000/api/v1/getCategoryProducts/${category}`).pipe(map((res:any)=>{return res}));
  }
}
