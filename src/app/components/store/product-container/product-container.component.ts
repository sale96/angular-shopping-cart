import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from '../../../models/ProductModel';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit {
  productItems: Array<ProductModel>;

  constructor(private cart: CartService, private products: ProductService) {
    this.productItems = products.getProducts();
  }

  ngOnInit(): void {
  }

  addToCart(product: ProductModel): void {
    this.cart.addToCart(product);
  }

}
