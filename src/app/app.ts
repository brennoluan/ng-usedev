import { Component } from '@angular/core';
import { Footer } from './components/layout/footer/footer';
import { Header } from './components/layout/header/header';
import { Banner } from './components/layout/banner/banner';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Footer, Header, Banner, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
