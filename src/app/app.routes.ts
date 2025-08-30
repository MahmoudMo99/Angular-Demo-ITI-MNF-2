import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Products } from './components/products/products';
import { Directives } from './components/directives/directives';
import { NotFound } from './components/not-found/not-found';
import { ProductDetails } from './components/product-details/product-details';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'products', component: Products },
  { path: 'products/:id', component: ProductDetails },
  { path: 'directives', component: Directives },
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  { path: '**', component: NotFound },
];
