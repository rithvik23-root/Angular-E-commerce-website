import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })

  constructor(private router:Router,private service:AuthServiceService) { }

  ngOnInit(): void {
  }

  onLogin()
{


  this.service.checkUser(this.loginForm.value).subscribe(res=>{
    let obj;
    obj=res;
    console.log(obj);
    if(obj.isAdmin==false){
      this.router.navigate([`home/${obj.id}`])
    }
    else{
      this.router.navigate(["admin/"])
    }
  })
}
 

}
