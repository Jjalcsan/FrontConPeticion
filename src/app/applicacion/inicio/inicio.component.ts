import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit(): void {
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
