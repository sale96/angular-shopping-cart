import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../../../models/ProductModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;
  @Output() item: EventEmitter<ProductModel> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart($event): void {
    this.item.emit(this.product);
  }

  getAllCartItems() {
    
  }
}
