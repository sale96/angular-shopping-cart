import { Injectable } from '@angular/core';
import { ProductModel } from '../models/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
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
    },
    {
      id: 3,
      name: "Samsung",
      price: 23423,
      image: "http://placehold.it/250x250"
    },
  ];
  
  constructor() { }

  getProducts(): Array<ProductModel> {
    return this.productItems;
  }
}
