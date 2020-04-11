import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavBarComponent } from './component/shared/nav-bar/nav-bar.component';
import { PrincipalComponent } from './component/principal/principal.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NavBarComponent, PrincipalComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
