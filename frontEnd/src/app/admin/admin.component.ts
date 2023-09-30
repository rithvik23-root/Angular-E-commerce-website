import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { CategoryService } from '../services/category.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  addProduct:boolean=false;
  displayButtons:boolean=true;
  viewProducts:boolean=false;
  allProducts:any;
  editFormDiv:boolean=false;
  editProduct;

  constructor(private service:AdminService,private categoryService:CategoryService,private router:Router,private productService:ProductsService) { }

  categories=[];

  ngOnInit(): void {

this.categoryService.getCategories().subscribe(res=>{
  this.categories=res;
 
});


  }

  editForm=new FormGroup({
        
    name:new FormControl(''),
    description:new FormControl(''),
    richDescription:new FormControl(''),
      image:new FormControl(''),
      brand:new FormControl(''),
      price:new FormControl(''),
      category:new FormControl(''),

      countInStock:new FormControl(''),
      rating:new FormControl(''),
      isFeatured:new FormControl(''),
})

  addProductForm=new FormGroup({
        
      name:new FormControl(''),
      description:new FormControl(''),
      richDescription:new FormControl(''),
        image:new FormControl(''),
        brand:new FormControl(''),
        price:new FormControl(''),
        category:new FormControl(''),

        countInStock:new FormControl(''),
        rating:new FormControl(''),
        isFeatured:new FormControl(''),
  })


  onViewProducts(){
    
    this.productService.getProducts().subscribe(res=>{
      this.allProducts=res;
      console.log(this.allProducts);
      
  })}

  edit(product){
      this.viewProducts=false;
      this.editFormDiv=true;
      this.editProduct=product;
      console.log(this.editProduct);

      
  }

  onEditProduct(id){

    
    

    if(this.editForm.value.isFeatured==="yes"){
      this.editForm.value.isFeatured=true
    }

    else{
      this.editForm.value.isFeatured=false
    }

    this.editForm.value.price=parseInt(this.editForm.value.price);

  this.productService.editProduct(id,this.editForm.value).subscribe(res=>{console.log(res);})





  }
delete(id){
  
   this.productService.deleteProduct(id).subscribe(res=>{
     alert(res);
     
   })
}



  


  onSubmitProduct(){

    if(this.addProductForm.value.isFeatured==="yes"){
      this.addProductForm.value.isFeatured=true
    }

    else{
      this.addProductForm.value.isFeatured=false
    }

   this.addProductForm.value.price=parseInt(this.addProductForm.value.price);

   this.service.addProduct(this.addProductForm.value).subscribe(res=>{
     alert("Product successfully added");
     this.addProductForm.reset();
   })
    
  }



  signOut(){
     this.router.navigate(["login/"])
  }



}
