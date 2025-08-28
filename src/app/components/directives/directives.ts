import {
  CurrencyPipe,
  DatePipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  selector: 'app-directives',
  imports: [CurrencyPipe, DatePipe, LowerCasePipe, TruncatePipe],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  code: string = 'SAR';
  color: string = 'red';
  des: string =
    'Mahmoud Mohamed Mohamed Mohamed Mohamed Mohamed Mohamed Mohamed Mohamed Mohamed Mohamed Mahmoud Mohamed Mohamed Mohamed Mohamed Mohamed Mohamed Mohamed Mohamed Mohamed Mohamed';
  currentDate = new Date();
  products: any[] = [
    { id: 1, name: 'prod 1', quantity: 5, price: 100 },
    { id: 2, name: 'prod 2', quantity: 8, price: 250 },
    { id: 3, name: 'prod 3', quantity: 10, price: 300 },
    { id: 4, name: 'prod 4', quantity: 1, price: 500 },
  ];
}
