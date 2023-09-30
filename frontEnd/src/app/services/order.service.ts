import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'models/order';
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }


  sendOrder(order:Order){
  return this.http.post("http://localhost:3000/api/v1/postOrder",order)
  }

  getUserOrders(id:string){
    return this.http.get(`http://localhost:3000/api/v1/getUserOrders/${id}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  
}
