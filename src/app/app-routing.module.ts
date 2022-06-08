import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './applicacion/inicio/inicio.component';
import { LandingComponent } from './landing/landing/landing.component';
import { LoginComponent } from './landing/login/login.component';
import { RegisterComponent } from './landing/register/register.component';

const routes: Routes = [
  { path: "", component: LandingComponent, pathMatch: "full"},
  { path: "landing/login", component: LoginComponent, pathMatch: "full"},
  { path: "landing/register", component: RegisterComponent, pathMatch: "full"},
  { path: "inicio", component: InicioComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
