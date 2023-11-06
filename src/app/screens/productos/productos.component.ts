import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/productos/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  constructor( private servicio: ProductoService){}

  dataProductos: any;

  //MÉTODO GET
  ngOnInit(){
    this.servicio.getProductos().subscribe( datos =>{
      this.dataProductos = datos;
    })
  }

  // MÉTODO POST
  crearProducto( ide:string, articulo: string, valor: any ){

    const iden= +ide;
    const temp= +valor

    const producto={ 
      id: iden, 
      "nombre": articulo,
      precio: temp
    }

    this.servicio.postProductos(producto).subscribe()
  }

  //MÉTODO PUT
  actualizarProducto( id: any, articulo: any, valor: any){
    const iden= +id;
    const temp= +valor

    const producto={ 
      id: iden, 
      "nombre": articulo,
      precio: temp
    }

    this.servicio.putProductos( producto, iden ).subscribe()
  }

  //MÉTODO DELETE
  eliminarProducto(id: any){

    this.servicio.deleteProductos(id).subscribe()
  }

}
