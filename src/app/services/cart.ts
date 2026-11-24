import { computed, effect, Injectable, signal } from '@angular/core';
import { Product } from '../products';
import { CartItem } from '../cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = signal<CartItem<Product>[]>([]);
  cartItems = this.cart.asReadonly();
  cartItemsCount = computed(() => this.cart().reduce((acc, cartItem) => acc + cartItem.quantity, 0));
  cartItemsTotal = computed(() => this.cart().reduce((acc, cartItem) => acc + cartItem.item.price * cartItem.quantity, 0));

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

  removeFromCart(product: Product): void {
    const itemIndexToUpdate = this.cart().findIndex(cartItem => cartItem.item.id === product.id);

    if (itemIndexToUpdate < 0) {
      return;
    }

    const updatedCart = [...this.cart()];
    updatedCart[itemIndexToUpdate].quantity -= 1;
    this.cart.set(updatedCart.filter(cartItem => cartItem.quantity > 0));
  }

  removeAllFromCart(product: Product): void {
    const itemIndexToUpdate = this.cart().findIndex(cartItem => cartItem.item.id === product.id);

    if (itemIndexToUpdate < 0) {
      return;
    }

    this.cart.update(cart => cart.filter(cartItem => cartItem.item.id !== product.id));
  }
}
