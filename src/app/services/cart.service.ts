import { Injectable } from '@angular/core';
import { CartProductModel } from '../models/CartProductModel';
import { ProductModel } from '../models/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Array<CartProductModel> = new Array<CartProductModel>();

  constructor() { }

  getAllCartItems(): Array<CartProductModel> {
    return this.cartItems;
  }

  addToCart(product: ProductModel) {
    let cartItem = new CartProductModel();
    cartItem.productName = product.name;
    cartItem.productId = product.id;
    cartItem.price = product.price;
    
    if (this.cartItems.find(x => x.productId == product.id)) {
      this.cartItems.find(x => x.productId == product.id).quantity++;
    } else {
      cartItem.quantity = 1;
      this.cartItems.push(cartItem);
    }
  }
}
