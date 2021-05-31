import { Product } from "./product.model";

export var products : Product[] = [
  {
    id : 'VGA24361',
    thumbnail: '../assets/products/1.png',
    name:'GTX 1050TI',
    price:2900000,
    amount:0
  },
  {
    id : 'VGA56332',
    thumbnail: '../assets/products/2.png',
    name:'RTX 3060',
    price:26000000,
    amount:0
  },
  {
    id : 'VGA36233',
    thumbnail: '../assets/products/3.png',
    name:'GTX 1050TI 4GB',
    price:2300000,
    amount:0
  },
  {
    id : 'VGA46436',
    thumbnail: '../assets/products/4.png',
    name:'GT 710',
    price:600000,
    amount:0
  },
  {
    id : 'VGA54366',
    thumbnail: '../assets/products/5.png',
    name:'GTX 750',
    price:1200000,
    amount:0
  },
  {
    id : 'VGA632235',
    thumbnail: '../assets/products/6.png',
    name:'GTX 1650',
    price:5900000,
    amount:0
  },
  {
    id : 'VGA136367',
    thumbnail: '../assets/products/7.png',
    name:'RTX 2060',
    price:15000000,
    amount:0
  }
]

export function getAmount(listProducts:Product[]):number{
  let count:number = 0;
  listProducts.forEach(item => {
    count += item.amount;
  });
  return count;
}

export function  getTotalPrice(listProducts:Product[]){
  let price = 0;
  listProducts.forEach(item => {
    price += item.price * item.amount;
  });
  return price;
}

export function changeCurrency(price:number){
  let priceStr:string = price+'';
  let result:string = priceStr.substring(0,priceStr.length/3);
  let count = 0;
  for(let i = priceStr.length/3; i < priceStr.length; i = i + 3){
    count ++;
    result +='.';
    result += priceStr.substring(i,i+3);
  }
  return result;

}
export function removeProduct(pid:string):void{
  const index = products.findIndex(product => product.id === pid);
  products.splice(index,1);
 }

