import { Component, signal } from '@angular/core';
import { Home } from './components/home/home';
import { ControlFlow } from './components/control-flow/control-flow';

@Component({
  selector: 'app-root',
  imports: [Home, ControlFlow],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('day2');

  // showTimer: boolean = true;

  // toggleTimer() {
  //   this.showTimer = !this.showTimer;
  // }
}
