import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  angForm!: FormGroup;

  constructor(public router : Router, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.angForm = this.fb.group({
      correo: ['', Validators.required ],
      contra: ['', Validators.required ]
    });
  }

  navigateToInicio(){
    this.router.navigateByUrl("/inicio");
  }


}
