import { Component, OnInit } from '@angular/core';
import {ProductsType} from '../ProductsType';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: ProductsType = {
    nameProduct: 'Product1',
    describe: 'this is good products',
    price: 9999,
    picture: 'https://cdn.tgdd.vn/Products/Images/42/114111/iphone-x-256gb-h2-400x460.png'
  }
  constructor() { }

  ngOnInit() {
  }

}
