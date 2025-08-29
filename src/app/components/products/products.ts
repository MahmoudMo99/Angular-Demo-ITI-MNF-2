import { Component, inject, OnInit } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { IProductsList } from '../../models/iproducts-list';
import { Product } from '../../services/product';

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  // products: any[] = [
  //   {
  //     id: 1,
  //     name: 'prod 1',
  //     description: 'prod 1 desc',
  //     quantity: 5,
  //     price: 100,
  //   },
  //   {
  //     id: 2,
  //     name: 'prod 2',
  //     description: 'prod 2 desc',
  //     quantity: 8,
  //     price: 250,
  //   },
  //   {
  //     id: 3,
  //     name: 'prod 3',
  //     description: 'prod 3 desc',
  //     quantity: 10,
  //     price: 300,
  //   },
  //   {
  //     id: 4,
  //     name: 'prod 4',
  //     description: 'prod 4 desc',
  //     quantity: 1,
  //     price: 500,
  //   },
  // ];

  // from service

  // constructor(private productService: Product) {}
  private productService = inject(Product);

  products: IProductsList[] = [];

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  cart: any[] = [];

  handleAddToCart(product: any) {
    const existingProduct = this.cart.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  getTotalPrice() {
    let total = 0;
    for (let prd of this.cart) {
      total += prd.price * prd.quantity;
    }
    return total;
  }
}
