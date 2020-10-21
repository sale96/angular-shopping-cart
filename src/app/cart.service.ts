import { Injectable } from '@angular/core';
import { ProductModel } from './models/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Array<ProductModel>;
  constructor() { }

  addToCart(product: ProductModel) {
    this.cartItems.push(product);
  }
}
