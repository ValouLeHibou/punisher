import { Component, OnInit } from '@angular/core';
import { Product } from '../products-list/product';
import { HttpProducts } from '../repository/http.products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  product: Product;

  constructor(private productService: HttpProducts, private routeService: ActivatedRoute) {}

  ngOnInit() {
    this.fetchOne();
  }

  fetchOne(): void {
    this.productService.fetchProductById(this.routeService.snapshot.params.id).subscribe((data: Product) => {
      this.product = data;
    });
  }
}
