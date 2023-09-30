import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { CategoryService } from '../services/category.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allProducts:any;
  allCategories:any;
  searchedValue='';


  constructor(private service:ProductsService,private cartService:CartService,private router:Router,private activatedRoute: ActivatedRoute,private categoryService:CategoryService) { }
 
  
  ngOnInit(): void {

    this.service.getProducts().subscribe(res=>{
          this.allProducts=res;
          console.log(this.allProducts);
          this.track=this.cartService.cartItemList.length;
    })


    
      this.categoryService.getCategories().subscribe(res=>{
        this.allCategories=res;
      })
      

  }

  track;

  addToCart(d){
    
    
    this.cartService.updateCart(d);
    this.track=this.cartService.cartItemList.length;
   
  }

  

  navigateToCart(){
    let userId=this.activatedRoute.snapshot.params.id;
    this.router.navigate([`cart/${userId}`])
  }

  navigateToUserOrders(){
    this.router.navigate([`viewOrders/${this.activatedRoute.snapshot.params.id}`])
  }


  clickedOnCategory(i){
   this.service.getCategoryProducts(i).subscribe(res=>{
     this.allProducts=res;
   })
    

  }

  allCategoriesf(){
    this.service.getProducts().subscribe(res=>{
      this.allProducts=res;
      // console.log(this.allProducts);
      // this.track=this.cartService.cartItemList.length;
})
    

  }

  onSearch(event:any){
     
    //  this.searchedValue=this.searchedValue;
     
  }

  signOut(){
    this.router.navigate(["login/"])
  }

  



}
