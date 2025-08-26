import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isLoggedIn: boolean = false;

  userName: string = 'Mahmoud Mohamed';

  role: string = 'user';

  products: IProduct[] = [
    { id: 1, name: 'Labtop', price: 1000, quantity: 10 },
    { id: 2, name: 'Phone', price: 1000, quantity: 5 },
    { id: 3, name: 'Tablet', price: 1000, quantity: 3 },
  ];

  login() {
    this.isLoggedIn = true;
  }
  logout() {
    this.isLoggedIn = false;
  }
}
