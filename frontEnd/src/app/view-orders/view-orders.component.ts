import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { OrderService } from '../services/order.service';


@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.scss']
})
export class ViewOrdersComponent implements OnInit {

  constructor(private service:OrderService,private route:ActivatedRoute,private router:Router) { }

  userOrders:any=[];
  dates:any=[];

  deliveryDate;


  

  ngOnInit(): void {

    this.service.getUserOrders(this.route.snapshot.params.id).subscribe(res=>{
      this.userOrders=res;

      console.log(this.userOrders);

      for(let i of this.userOrders){
        i.dateOrdered=i.dateOrdered.slice(0,24);
        i.deliveryDate=i.deliveryDate.slice(0,15)
      }
      // console.log(this.userOrders)

      
      })


      
    }

    back(){
  this.router.navigate([`home/${this.route.snapshot.params.id}`])
    }


   



  }

      
     
 

  

