import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { SharedModule } from '../shared/shared.module';
import { OtroUserComponent } from './otro-user/otro-user.component';



@NgModule({
  declarations: [
    InicioComponent,
    OtroUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    InicioComponent,
    OtroUserComponent
  ]
})
export class ApplicacionModule { }
