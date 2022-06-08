import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    TopbarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopbarComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
