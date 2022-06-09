import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { SharedModule } from '../shared/shared.module';
import { OtroUserComponent } from './otro-user/otro-user.component';
import { AlbumComponent } from './album/album.component';
import { SeguidoresComponent } from './seguidores/seguidores.component';
import { GruposComponent } from './grupos/grupos.component';
import { AlbumesComponent } from './albumes/albumes.component';
import { GrupoComponent } from './grupo/grupo.component';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [
    InicioComponent,
    OtroUserComponent,
    AlbumComponent,
    SeguidoresComponent,
    GruposComponent,
    AlbumesComponent,
    GrupoComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    InicioComponent,
    OtroUserComponent,
    AlbumComponent,
    SeguidoresComponent,
    GruposComponent,
    AlbumComponent,
    GrupoComponent,
    PerfilComponent
  ]
})
export class ApplicacionModule { }
