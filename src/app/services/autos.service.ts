import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  constructor(private http: HttpClient) { }

  private API_AUTOS= 'http://localhost:3000/autos'
   //grabar datos
  postAutos(auto: JSON):Observable<any>{
    return this.http.post(this.API_AUTOS,auto)
  }
  //leer datos
 
  getAutos(): Observable<any>{
    return this.http.get(this.API_AUTOS)

  }
  //para Leer Datos de una sola Cosa
 getAuto(id : string):Observable <any>{
  return this.http.get(this.API_AUTOS+"/"+id)
 }
  //Editar los campos de la coleccion

  putAutos(auto: any):Observable<any>{
   return  this.http.put(`${this.API_AUTOS}/${auto.id}`,auto)
  }

  //Eliminar datos de una coleccion

  deleteAutos(id: string):Observable<any>{
    return this.http.delete(`${this.API_AUTOS}/${id}`)
  }
}
