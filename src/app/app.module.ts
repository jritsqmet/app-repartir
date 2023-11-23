import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './screens/home/home.component';
import { PersonalComponent } from './screens/personal/personal.component';
import { ContactoComponent } from './screens/contacto/contacto.component';
import { Error404Component } from './screens/error404/error404.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './screens/productos/productos.component';
import { DetallesProductoComponent } from './screens/detalles-producto/detalles-producto.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PersonalComponent,
    ContactoComponent,
    Error404Component,
    ProductosComponent,
    DetallesProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
