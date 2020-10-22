import { Component, OnInit, Input } from '@angular/core';
import { CartProductModel } from 'src/app/models/CartProductModel';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item: CartProductModel;

  constructor() { }

  ngOnInit(): void {
  }

}
