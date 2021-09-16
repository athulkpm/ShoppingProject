import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  productList: Product[];

  constructor(private productservice:ProductService,
    private router:Router) { }

  ngOnInit(): void {
    this.productList =this.productservice.getProducts();  
  }
goToCart(){
  this.router.navigate(['/Cart'])
}

}
