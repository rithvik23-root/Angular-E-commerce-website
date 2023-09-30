import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'models/product';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  addProduct(product:Product){

    return this.http.post("http://localhost:3000/api/v1/postProduct",product);

  }
}
