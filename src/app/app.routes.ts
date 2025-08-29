import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Products } from './components/products/products';
import { Directives } from './components/directives/directives';
import { NotFound } from './components/not-found/not-found';
import { ProductDetails } from './components/product-details/product-details';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'products', component: Products },
  { path: 'products/:id', component: ProductDetails },
  { path: 'directives', component: Directives },
  { path: '**', component: NotFound },
];
