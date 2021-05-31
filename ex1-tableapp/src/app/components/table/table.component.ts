import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../../Models/product.model';
import {removeProduct ,changeCurrency, products, getAmount} from '../../Models/products';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input()  listProducts:any;
  stt : number = 0;
  constructor() {
  }

  changeCurrency(price:number){
    return changeCurrency(price);
  }

 removeProduct(pid:string):void{
  removeProduct(pid);
 }
 updateQuantity(element:any,pid:string){
  for(let i =0; i < this.listProducts.length; i++){
    if(this.listProducts[i].id === pid){
      this.listProducts[i].amount = element.value;
    }
  }

 }

  ngOnInit(): void {
  }

}
