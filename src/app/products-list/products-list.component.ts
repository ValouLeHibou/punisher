import { Component, OnInit } from '@angular/core';
import { HttpProducts } from '../repository/http.products';
import { Product } from './product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})

export class ProductsListComponent implements OnInit {
  products: Product[];

  constructor(private productService: HttpProducts) {}

  ngOnInit() {
    this.fetchProductList();
  }

  fetchProductList(): void {
    console.log(this.productService.fetchList(), this.productService.fetchList().subscribe((data: Product[]) => {
      this.products = data;
    }));
    this.productService.fetchList().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
}
