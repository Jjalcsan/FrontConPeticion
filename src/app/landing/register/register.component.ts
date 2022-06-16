import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email!: string;
  password!: string;
  nick!: string;
  nombre!: "admin2";
  apellidos!: "admin2";
  direccion!: "C\Admin nº50";
  telefono!: string;
  edad!: number;
  fotoPerfil!: "../../assets/img";

  constructor(public router : Router, private fb : FormBuilder, private loginService : LoginService) { }

  ngOnInit(): void {
  }

  register(){  
    this.loginService.register("angular@angular.com", "angular", "angular", "angular nombre", "angular apellidos", "angular direccion", "angular tlfn", 22, "../../img").subscribe({
        next: resp => { 
          localStorage.setItem("token", resp.jwt_token)
           this.router.navigateByUrl('/inicio');
        },
        error: error =>{
            alert("Ha ocurrido un error")
          }
    })
  }

  navigateToInicio(){
    this.router.navigateByUrl("/inicio");
  }

  navigateToLogin(){
    this.router.navigateByUrl("/login");
  }

}
