import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/services/usuario.interface';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuario!: Usuario;

  constructor(public router : Router, private loginService : LoginService) { }

  ngOnInit(): void {
    this.get()
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
  
  get(){  
    this.loginService.getUsuario().subscribe({
        next: resp => { 
          console.log(resp)
        },
        error: error =>{
            alert("Ha ocurrido un error")
          }
    })
  }

}
