import { Component } from '@angular/core';
import { Footer } from './shared/layout/footer/footer';
import { Header } from './shared/layout/header/header';
import { Banner } from './shared/layout/banner/banner';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Footer, Header, Banner, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
