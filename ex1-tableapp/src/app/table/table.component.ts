import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  products : Product[] = [
    {
      id : '1',
      thumbnail: '../assets/products/1.png',
      name:'GTX 1050TI',
      price:2900000,
      amount:2
    },
    {
      id : '2',
      thumbnail: '../assets/products/2.png',
      name:'RTX 3060',
      price:26000000,
      amount:2
    },
    {
      id : '3',
      thumbnail: '../assets/products/3.png',
      name:'GTX 1050TI 4GB',
      price:2300000,
      amount:4
    },
    {
      id : '4',
      thumbnail: '../assets/products/4.png',
      name:'GT 710',
      price:600000,
      amount:6
    },
    {
      id : '5',
      thumbnail: '../assets/products/5.png',
      name:'GTX 750',
      price:1200000,
      amount:3
    },
    {
      id : '6',
      thumbnail: '../assets/products/6.png',
      name:'GTX 1650',
      price:5900000,
      amount:2
    },
    {
      id : '7',
      thumbnail: '../assets/products/7.png',
      name:'RTX 2060',
      price:15000000,
      amount:3
    }
  ]

  constructor() {
  }

 removeProduct(){

 }

  ngOnInit(): void {
  }

}
