import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  angForm!: FormGroup;

  constructor(public router : Router, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.angForm = this.fb.group({
       nick: ['', Validators.required ],
       contra: ['', Validators.required ],
       contraAgain: ['', Validators.required ],
       email: ['', Validators.required ],
       edad: ['', Validators.required ]
    });
  }

  navigateToInicio(){
    this.router.navigateByUrl("/inicio");
  }

  navigateToLogin(){
    this.router.navigateByUrl("/login");
  }

}
