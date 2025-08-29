import { Injectable } from '@angular/core';
import { IProductsList } from '../models/iproducts-list';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private products: IProductsList[] = [
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

  // get all products

  getAllProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find((p) => p.id === id);
  }

  filterProductsByName(name: string) {
    return this.products.filter((p) => p.name.toLowerCase().includes(name));
  }
}
