import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  cart:any=[];
  // totalAmount;

  constructor(private orderService:OrderService,private cartService:CartService,private router:Router,private route:ActivatedRoute) { }


  userId=this.route.snapshot.params.id;

  ngOnInit(): void {

    
    
   this.cart=this.cartService.cartItemList;

   
     
      
     
   
   

  }

  removeFromCart(d){

   

    this.cartService.deleteFromCart(d);

     this.router.navigate([`cart/${this.userId}`])
  }

  getTotalAmount(){
    return this.cartService.totalAmount();
  }

  checkout(){

    for(let i of this.cartService.cartItemList){
      Object.assign(i,{user:this.userId});
      
      // this.orderService.sendOrder(i).subscribe(res=>{console.log(res)})
    }

    this.router.navigate([`shipping/${this.userId}`])

    
  }

  goBack(){
    this.router.navigate([`home/${this.userId}`])
  }

}
