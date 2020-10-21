import { Component, OnInit } from '@angular/core';
import { CartProductModel } from 'src/app/models/CartProductModel';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cart: CartService) { }

  ngOnInit(): void {
  }

  getAllCartItems(): Array<CartProductModel> {
    return this.cart.getAllCartItems();
  }
}
