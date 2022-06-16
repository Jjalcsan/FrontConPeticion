import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  angForm!: FormGroup;
  email!: string;
  password!: string;

  constructor(public router : Router, private fb : FormBuilder, private loginService : LoginService) { }

  ngOnInit(): void {
  }

  navigateToInicio(){
    this.router.navigateByUrl("/inicio");
  }

  login(){  
    this.loginService.login("admin@admin.com", "admin").subscribe({
      
        next: resp => { 
          console.log(resp)
          localStorage.setItem("token", resp.jwt_token)
          console.log(resp.message)
           this.router.navigateByUrl('/inicio');
        },
        error: error =>{
            alert(error.message)
          }
    })
  }


}
