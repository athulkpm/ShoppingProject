import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './components/login/login.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductService } from './services/product.service';
import { ProductItemComponent } from './components/shopping-cart/product-item/product-item.component';
const routes: Routes = [
{path: '', component: LoginComponent},
{path: 'Product',component:ShoppingCartComponent},
{path: 'login', component: LoginComponent},
{path: 'product-item',component: ProductItemComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
