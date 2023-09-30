import { Injectable } from '@angular/core';
import { Product } from 'models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

   public cartItemList:any=[];

   updateCart(product:Product){
    this.cartItemList.push(product);
    
   }

   

   totalAmount(){
          let amount=0;
          for(let i of this.cartItemList){
            amount=amount+i.price;
            
          }

          

          return amount;
   }

   deleteFromCart(a){

    this.cartItemList.splice(a,1);
    



       

   }

}
