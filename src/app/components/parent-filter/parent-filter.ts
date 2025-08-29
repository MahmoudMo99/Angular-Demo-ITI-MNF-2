import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-parent-filter',
  imports: [FormsModule, ProductList],
  templateUrl: './parent-filter.html',
  styleUrl: './parent-filter.css',
})
export class ParentFilter {
  filterText = '';
}
