import { Injectable } from '@angular/core';
import { CartProductModel } from '../models/CartProductModel';
import { ProductModel } from '../models/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Array<CartProductModel>;
  constructor() { }

  addToCart(product: ProductModel) {
    let cartItem = new CartProductModel();

    cartItem.quantity = 1;
    cartItem.product = product;
    this.cartItems.push(cartItem);
  }
}
