import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  

  signUpForm=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    phone:new FormControl(''),
    hNo:new FormControl(''),
    area:new FormControl(''),
    city:new FormControl(''),
    state:new FormControl(''),
    pincode:new FormControl('')
  })

  constructor(private authService:AuthServiceService,private router:Router) { }

  ngOnInit(): void {
  }


  onSubmit(){
    
    this.authService.addUser(this.signUpForm.value).subscribe(res=>{

      this.router.navigate(["login/"])
      
    })
  }



  

}
