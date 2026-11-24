import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../../services/cart';
import { ProductService } from '../../../services/product';
import { Product } from '../../../products';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  private cartService = inject(CartService);
  private productService = inject(ProductService)
  product = signal(this.productService.getProducts()[0])

  addToCart() {
    this.cartService.addToCart(this.product());
  }
}
