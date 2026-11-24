import { Injectable } from '@angular/core';
import { products, Product } from '../products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = [...products]

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
