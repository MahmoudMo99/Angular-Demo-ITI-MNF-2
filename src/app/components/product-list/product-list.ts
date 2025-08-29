import {
  Component,
  Input,
  input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit, OnChanges {
  @Input() filter: string = '';

  products: string[] = ['Apple MacBook', 'Asus Laptop', 'Dell Laptop', 'HP'];
  filteredProducts: string[] = this.products;

  ngOnInit(): void {
    // console.log('ngOnInit is called');
    // this.filteredProducts = this.products.filter((p) =>
    //   p.toLowerCase().includes(this.filter.toLowerCase())
    // );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    if (changes['filter']) {
      console.log('ngOnChanges is called');
      this.filteredProducts = this.products.filter((p) =>
        p.toLowerCase().includes(this.filter.toLowerCase())
      );
    }
  }
}
