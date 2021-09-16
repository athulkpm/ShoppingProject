import { Injectable } from '@angular/core';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(1, 'Samsung', 'This is the product 1 description. The product is really kool!', 20000,'src/assets/samsung.jpg'),
    new Product(2, 'Vivo', 'This is the product 2 description. The product is really kool!', 15000,'assets/vivo.jpg'),
    new Product(3, 'Redmi', 'This is the product 3 description. The product is really kool!', 18000,'assets/redmi.jpg'),
    new Product(4, 'Macbook', 'This is the product 4 description. The product is really kool!', 100000,'assets/macbook.jpeg'),
    new Product(5, 'Shirt', 'This is the product 5 description. The product is really kool!', 1500,'assets/tshirt.webp'),
    new Product(6, 'Jeans', 'This is the product 6 description. The product is really kool!', 1500,'assets/jeans.webp'),
  ]
  constructor() { }
  getProducts():Product[]{
    return this.products
  }
  get():Product[]{
    return this.products;
  }
}
