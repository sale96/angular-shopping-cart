import { Component, OnInit, Input } from '@angular/core';
import { CartProductModel } from 'src/app/models/CartProductModel';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item: CartProductModel;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  decreseQuantity(event): void {
    this.cartService.changeQuantity(this.item.productId, 'desc');
  }

  increseQuantity(event): void {
    this.cartService.changeQuantity(this.item.productId, 'asc');
  }

}
