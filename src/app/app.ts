import { Component, signal } from '@angular/core';
import { Home } from './components/home/home';
import { ControlFlow } from './components/control-flow/control-flow';
import { Timer } from './components/timer/timer';

@Component({
  selector: 'app-root',
  imports: [Timer],
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
