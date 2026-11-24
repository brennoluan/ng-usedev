import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../../shared/services/cart';
import { ProductService } from '../../../../shared/services/product';
import { AuthService } from '../../../../shared/services/auth';
import { Button } from '../../../../shared/ui/button/button';

@Component({
  selector: 'app-product-detail',
  imports: [Button],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  private router = inject(Router);
  private cartService = inject(CartService);
  private productService = inject(ProductService)
  authService = inject(AuthService);

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
