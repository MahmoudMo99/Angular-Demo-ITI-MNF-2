import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: any[] = [
    {
      id: 1,
      name: 'prod 1',
      description: 'prod 1 desc',
      quantity: 5,
      price: 100,
    },
    {
      id: 2,
      name: 'prod 2',
      description: 'prod 2 desc',
      quantity: 8,
      price: 250,
    },
    {
      id: 3,
      name: 'prod 3',
      description: 'prod 3 desc',
      quantity: 10,
      price: 300,
    },
    {
      id: 4,
      name: 'prod 4',
      description: 'prod 4 desc',
      quantity: 1,
      price: 500,
    },
  ];

  cart: any[] = [];

  handleAddToCart(product: any) {
    this.cart.push(product);
  }
}
