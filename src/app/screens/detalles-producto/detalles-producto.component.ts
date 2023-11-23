import { R3BoundTarget } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/productos/producto.service';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent {

  constructor( private servicio: ProductoService, private ruta: ActivatedRoute){}

  dataProductos: any
  producto: any

  ngOnInit(){
    this.servicio.getProductos().subscribe( prod =>{
      this.dataProductos = prod;

      this.ruta.params.subscribe( parametro =>{
        const id= +parametro['id']  
           
        for ( let item of this.dataProductos){
          if(item.id === id)
            this.producto = item
        }
      })
    })
  }

}
