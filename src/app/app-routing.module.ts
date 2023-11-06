import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { PersonalComponent } from './screens/personal/personal.component';
import { ContactoComponent } from './screens/contacto/contacto.component';
import { Error404Component } from './screens/error404/error404.component';
import { ProductosComponent } from './screens/productos/productos.component';
import { DetallesProductoComponent } from './screens/detalles-producto/detalles-producto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'personal', component: PersonalComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'detalles/:id', component: DetallesProductoComponent},

  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
