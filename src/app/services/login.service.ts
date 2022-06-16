import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Response } from "./response.interface";
import { Usuario } from "./usuario.interface";

@Injectable({
    providedIn: 'root'
})
export class LoginService{

    constructor(private http : HttpClient){ }

    login(email:string, password:string):Observable<Response>{
        const url = `${environment.urlApi}/login`;
        const body =  {email, password};
                
        return this.http.post<Response>(url, body);

       
    }

    register(email:string, password:string, nick:string, nombre:string, apellidos:string, direccion:string, telefono:string, edad:number, fotoPerfil:string):Observable<Response>{
        const url = `${environment.urlApi}/register`;
        const user =  {email, password, nick, nombre, apellidos, direccion, telefono, edad, fotoPerfil};
                
        return this.http.post<Response>(url, user);

       
    }
    
    getUsuario() {

        const url = `${ environment.urlApi }/usuarios/1`;

        const headers = new HttpHeaders() .set('Authorization',

         `Bearer ${localStorage.getItem('token')}` );

         return this.http.get<Usuario>(url,{headers});

      }

}