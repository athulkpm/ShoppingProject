import { Injectable } from '@angular/core';
import { ProductItemComponent } from '../components/shopping-cart/product-item/product-item.component';
import { Product } from '../model/product';
import { ProductService } from './product.service';
import { ShoppingCartComponent } from '../components/shopping-cart/shopping-cart.component';
@Injectable({
  providedIn: 'root'
})
export class CartService {
productItem: Product[]=[]
addToCart(product: Product){
  this.productItem.push(product)
}
getItems(){
  return this.productItem
}
clearCart()
{
  this.productItem=[]
  return this.productItem
}
  constructor() { }
}
