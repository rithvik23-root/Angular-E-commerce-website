import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  shipping=true;
  conf=false;

  constructor(private cartService:CartService,private orderService:OrderService,private router:Router,private route:ActivatedRoute) { }
   userId=this.route.snapshot.params.id;
  shippingForm=new FormGroup({
    hNo:new FormControl(''),
    area:new FormControl(''),
    city:new FormControl(''),
    state:new FormControl(''),
    pincode:new FormControl('')
  })

  ngOnInit(): void {
  }

  onSubmit(){
    for(let i of this.cartService.cartItemList){
      Object.assign(i,this.shippingForm.value);

      this.orderService.sendOrder(i).subscribe(res=>{console.log(res);})

      this.conf=true
      
    }



    
    
  }

  onView(){
    this.router.navigate([`viewOrders/${this.userId}`])
  }

}
