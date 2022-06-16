import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

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

  navigateToOtroUser(){
    this.router.navigateByUrl("/inicio/otroUsuario")
  }

  navigateToSeguidores(){
    this.router.navigateByUrl("/inicio/seguidores")
  }

  navigateToGrupos(){
    this.router.navigateByUrl("/inicio/grupos")
  }

  navigateToGrupo(){
    this.router.navigateByUrl("/inicio/grupo")
  }

  navigateToAlbum(){
    this.router.navigateByUrl("/inicio/album")
  }

  navigateToAlbumes(){
    this.router.navigateByUrl("/inicio/albumes")
  }

  navigateToPerfil(){
    this.router.navigateByUrl("/inicio/perfil")
  }

}
