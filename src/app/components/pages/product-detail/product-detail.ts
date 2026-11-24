import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart';
import { ProductService } from '../../../services/product';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  private router = inject(Router);
  private cartService = inject(CartService);
  private productService = inject(ProductService)

  id = input<string>();
  product = computed(() => this.productService.getProductById(Number(this.id())));

  private redirectIfNotExistEffect = effect(() => {
    if (!this.product()) {
      this.router.navigateByUrl('/products');
    }
  });

  addToCart() {
    const product = this.product();
    if (!product) return;
    this.cartService.addToCart(product);
  }
}
