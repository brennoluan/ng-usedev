import { Component, inject } from '@angular/core';
import { CartService } from '../../../../shared/services/cart';
import { CartItemRow } from '../../components/cart-item-row/cart-item-row';
import { Button } from '../../../../shared/ui/button/button';

@Component({
  selector: 'app-cart',
  imports: [CartItemRow, Button],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cartService = inject(CartService);
}
