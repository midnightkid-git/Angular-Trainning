export class Product{
 id:string;
 thumbnail:string;
 name:string;
price:number;
amount:number;

  // Normal signature with defaults
  constructor(id:string,thumbnail:string,name:string,price:number,amount:number) {
    this.id = id;
    this.thumbnail = thumbnail;
    this.name = name;
    this.price = price;
    this.amount = amount
  }
}
