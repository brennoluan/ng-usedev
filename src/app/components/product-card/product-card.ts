import { Component, inject, input, output } from '@angular/core';
import { Product } from '../../products';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  private cartService = inject(CartService);
  product = input.required<Product>();

  addToCart(product: Product) {
    console.log('Adding to cart:', product);
    this.cartService.addToCart(product);
  }
}
