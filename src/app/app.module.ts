import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// Rutas
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { CabeceraComponent } from './component/cabecera/cabecera.component';
import { BodyComponent } from './component/body/body.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule,APP_ROUTING  ],
  declarations: [ AppComponent, HelloComponent, PrincipalComponent, CabeceraComponent, BodyComponent, FooterComponent, NavbarComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
