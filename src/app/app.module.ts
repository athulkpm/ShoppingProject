import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShoppingCartComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
