import { Component, signal } from '@angular/core';
import { Nav } from './components/nav/nav';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Nav, RouterOutlet],
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
