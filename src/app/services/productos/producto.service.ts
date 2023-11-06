import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor( private http: HttpClient) { }

  private API_PRODUCTOS = "http://localhost:3000/productos";

  /****************************************/
  //MÉTODO GET
  getProductos(): Observable <any>{
    return this.http.get( this.API_PRODUCTOS )
  }
  
  /************************************************/
  //MÉTODO POST
  postProductos( producto: any ): Observable <any>{
    return this.http.post( this.API_PRODUCTOS, producto)
  }

  /***********************************************/
  //MÉTODO PUT
  putProductos( producto: any, id: any): Observable <any>{

    this.API_PRODUCTOS= `${this.API_PRODUCTOS}/${id}`

    //const viejo= this.API_PRODUCTOS+"/"+id

    //const viejo2 = this.API_PRODUCTOS+"/"+producto.id

    return this.http.put( this.API_PRODUCTOS, producto)
    //return this.http.put( viejo, producto)
  }

  /*********************************************************** */
  //MÉTODO DELETE
  deleteProductos(id: any): Observable <any>{

    this.API_PRODUCTOS= `${this.API_PRODUCTOS}/${id}`
    //const viejo= this.API_PRODUCTOS+"/"+id

    return this.http.delete(this.API_PRODUCTOS)
    //return this.http.delete(viejo)
  }


}
