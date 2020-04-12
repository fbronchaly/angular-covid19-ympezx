import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// Rutas
import { APP_ROUTING } from './app.routes';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { CabeceraComponent } from './component/cabecera/cabecera.component';
import { BodyComponent } from './component/body/body.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { Panel1Component } from './component/panel1/panel1.component';
import { Panel2Component } from './component/panel2/panel2.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule,APP_ROUTING,RouterModule ],
  declarations: [ AppComponent, HelloComponent, PrincipalComponent, CabeceraComponent, BodyComponent, FooterComponent, NavbarComponent, Panel1Component, Panel2Component],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
