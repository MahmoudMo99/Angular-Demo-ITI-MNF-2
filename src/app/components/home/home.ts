import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title: string = 'Hello in day2';
  description: string = ' Content : Data Binding, Control Flow ';

  isMale: boolean = true;

  userName: string = 'Mahmoud Mohamed';

  logoUrl: string = 'favicon.ico';

  buttonText: string = 'Click Me';

  products: any = [
    { id: 1, name: 'prod1' },
    { id: 2, name: 'prod2' },
    { id: 3, name: 'prod3' },
  ];

  productsQuantity: number = 10;

  // Display() {
  //   console.log(this.userName);
  //   alert(`Hello ${this.userName}`);
  // }

  decreaseQuantity() {
    this.productsQuantity--;
  }

  constructor() {}
}
