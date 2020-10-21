import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ProductModel } from '../../../models/ProductModel';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit {
  productItems: Array<ProductModel> = [
    {
      id: 1,
      name: "Alcatel One",
      price: 3333,
      image: "http://placehold.it/250x250"
    },
    {
      id: 2,
      name: "Nokia 3310",
      price: 440,
      image: "http://placehold.it/250x250"
    }
  ];

  constructor(private cart: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product: ProductModel): void {
    this.cart.addToCart(product);
  }

}
