import { Component, signal } from '@angular/core';
import { Directives } from "./components/directives/directives";
import { Products } from "./components/products/products";

@Component({
  selector: 'app-root',
  imports: [Directives, Products],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('day2');

  showTimer: boolean = true;

  toggleTimer() {
    this.showTimer = !this.showTimer;
  }
}
