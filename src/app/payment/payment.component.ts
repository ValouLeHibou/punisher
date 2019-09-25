import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  credit = new FormControl('');

  constructor(private routeService: ActivatedRoute) { }

  ngOnInit() {
  }

  moneyManager(productPrice: number, credit: number) {

  }
}
