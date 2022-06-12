import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './applicacion/inicio/inicio.component';
import { LandingComponent } from './landing/landing/landing.component';
import { LoginComponent } from './landing/login/login.component';
import { RegisterComponent } from './landing/register/register.component';
import { OtroUserComponent } from './applicacion/otro-user/otro-user.component';
import { SeguidoresComponent } from './applicacion/seguidores/seguidores.component';
import { GrupoComponent } from './applicacion/grupo/grupo.component';
import { AlbumComponent } from './applicacion/album/album.component';
import { PerfilComponent } from './applicacion/perfil/perfil.component';
import { GruposComponent } from './applicacion/grupos/grupos.component';
import { AlbumesComponent } from './applicacion/albumes/albumes.component';

const routes: Routes = [
  { path: "", component: LandingComponent, pathMatch: "full"},
  { path: "landing/login", component: LoginComponent, pathMatch: "full"},
  { path: "landing/register", component: RegisterComponent, pathMatch: "full"},
  { path: "inicio", component: InicioComponent, pathMatch: "full"},
  { path: "inicio/seguidores", component: SeguidoresComponent, pathMatch: "full"},
  { path: "inicio/otroUsuario", component: OtroUserComponent, pathMatch: "full"},
  { path: "inicio/seguidores/otroUsuario", component: OtroUserComponent, pathMatch: "full"},
  { path: "inicio/grupos", component: GruposComponent, pathMatch: "full"},
  { path: "inicio/grupos/grupo", component: GrupoComponent, pathMatch: "full"},
  { path: "inicio/grupo", component: GrupoComponent, pathMatch: "full"},
  { path: "inicio/albumes", component: AlbumesComponent, pathMatch: "full"},
  { path: "inicio/albumes/album", component: AlbumComponent, pathMatch: "full"},
  { path: "inicio/album", component: AlbumComponent, pathMatch: "full"},
  { path: "inicio/albumes/album/fotos", component: AlbumComponent, pathMatch: "full"},
  { path: "inicio/album/fotos", component: AlbumComponent, pathMatch: "full"},
  { path: "inicio/perfil", component: PerfilComponent, pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
