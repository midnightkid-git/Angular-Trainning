import { Component } from '@angular/core';
import { Product } from './Models/product.model';
import { getAmount, products } from './Models/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
listProducts:Product[] = products;
  title = 'ex1-tableapp';
}
