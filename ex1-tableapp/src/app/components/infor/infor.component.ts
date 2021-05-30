import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product.model';
import { getTotalPrice, products } from 'src/app/Models/products';
import {getAmount} from 'src/app/Models/products';
import {changeCurrency} from 'src/app/Models/products';

@Component({
  selector: 'app-infor',
  templateUrl: './infor.component.html',
  styleUrls: ['./infor.component.scss']
})
export class InforComponent implements OnInit {
  listProduct:Product[] = products;
  amount = getAmount();
  totalPrice = changeCurrency(getTotalPrice());

  constructor() { }

  ngOnInit(): void {
  }

}
