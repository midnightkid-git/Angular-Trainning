import { Component, OnInit } from '@angular/core';
import {Product} from '../../Models/product.model';
import {changeCurrency, products} from '../../Models/products';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  stt : number = 0;
  listProducts :Product[] = products;
  constructor() {
  }

  changeCurrency(price:number){
    return changeCurrency(price);
  }

 removeProduct(pid:string):void{
  const index = products.findIndex(product => product.id === pid);
  products.splice(index,1);
 }

  ngOnInit(): void {
  }

}
