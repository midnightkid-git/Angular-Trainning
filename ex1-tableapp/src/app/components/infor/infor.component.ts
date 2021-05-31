import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/Models/product.model';
import {getTotalPrice, products } from 'src/app/Models/products';
import {getAmount} from 'src/app/Models/products';
import {changeCurrency} from 'src/app/Models/products';

@Component({

  selector: 'app-infor',
  templateUrl: './infor.component.html',
  styleUrls: ['./infor.component.scss']
})
export class InforComponent implements OnInit {
  @Input() listProducts:any;
  constructor() { }

  ngOnInit(): void {
  }
  getTotalPrice(){
    return getTotalPrice(this.listProducts);
  }
  changeCurrency(price:number){
    return changeCurrency(price);
  }
  getTotalAmount(){
    return getAmount(this.listProducts);
  }


}
