import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../services/product';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  productData: IProduct | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: Product
  ) {}
  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.productData = this.productService.getProductById(id);
  }
}
