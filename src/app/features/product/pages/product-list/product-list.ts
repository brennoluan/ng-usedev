import { Component, inject, output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../../shared/models/products';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductService } from '../../../../shared/services/product';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  private productService = inject(ProductService);
  private router = inject(Router);
  products = this.productService.getProducts();
  addToCart = output<Product>();

  goToDetails(id: number): void {
    this.router.navigate(['/products', id]);
  }
}
