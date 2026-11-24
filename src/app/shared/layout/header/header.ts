import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private cartService = inject(CartService);
  authService = inject(AuthService);
  cartItemsCount = this.cartService.cartItemsCount;
}
