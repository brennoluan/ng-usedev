import { Component, inject, output } from '@angular/core';
import { Product } from '../../products';
import { ProductCard } from '../product-card/product-card';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  private productService = inject(ProductService);
  products = this.productService.getProducts();
  addToCart = output<Product>();
}
