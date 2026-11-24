import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product, products } from './products';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Banner } from './components/banner/banner';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Banner, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products = signal<Product[]>(products);
  cart = signal<Product[]>([]);
  cartItemsCount = computed(() => this.cart().length);

  addToCart(product: Product): void {
    this.cart.update(cart => [...cart, product]);
  }
}
