import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.html',
  styleUrl: './timer.css',
})
export class Timer implements OnInit, OnDestroy {
  interval: any;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      console.log('interval ... tick ');
    }, 1000);
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
    console.log('timer destroyed');
  }
}
