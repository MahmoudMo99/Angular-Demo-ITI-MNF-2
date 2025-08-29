import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [RouterModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product: any;

  @Output() addToCart = new EventEmitter<any>();

  router = inject(Router);

  onAddToCart() {
    this.addToCart.emit(this.product);
  }

  onViewDetails(id: number) {
    this.router.navigate(['products', id]);
  }
}
