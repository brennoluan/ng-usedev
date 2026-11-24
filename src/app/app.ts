import { Component, computed, signal } from '@angular/core';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Banner } from './components/banner/banner';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [Footer, Header, Banner, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
