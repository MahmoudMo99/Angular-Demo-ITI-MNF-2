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
  // String Interpolation
  title: string = 'Hello in Day 2';
  description: string = 'Content: Data Binding & Control Flow';

  // Property Binding + Class Binding
  isMale: boolean = true;

  // Two-way Binding
  userName: string = 'Mahmoud Mohamed';

  // Attribute Binding
  logoUrl: string = 'favicon.ico';

  // Event Binding
  buttonText: string = 'Click Me';

  // Control Flow Demo
  products: any[] = [
    { id: 1, name: 'Prod 1' },
    { id: 2, name: 'Prod 2' },
    { id: 3, name: 'Prod 3' },
  ];

  productsQuantity: number = 10;

  decreaseQuantity() {
    if (this.productsQuantity > 0) {
      this.productsQuantity--;
    }
  }
}
