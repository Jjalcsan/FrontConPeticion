import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit(): void {
  }

  navigateToOtroUser(){
    this.router.navigateByUrl("/inicio/otroUsuario")
  }

}
