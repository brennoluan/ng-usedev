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
}
