import { computed, effect, Injectable, signal } from '@angular/core';
import { Product } from '../products';
import { CartItem } from '../cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = signal<CartItem<Product>[]>([]);
  cartItemsCount = computed(() => this.cart().reduce((acc, cartItem) => acc + cartItem.quantity, 0));

  logEffect = effect(() => {
    console.log(this.cart());
  });

  addToCart(product: Product): void {
    const itemIndexToUpdate = this.cart().findIndex(cartItem => cartItem.item.id === product.id);

    if (itemIndexToUpdate < 0) {
      this.cart.update(cart => [...cart, { item: product, quantity: 1 }]);
      return;
    }

    const updatedCart = [...this.cart()];
    updatedCart[itemIndexToUpdate].quantity += 1;
    this.cart.set(updatedCart);
  }
}
