import { Component, input, output } from '@angular/core';
import { Product, products } from '../../products';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = input.required<Product[]>();
  addToCart = output<Product>();
}
