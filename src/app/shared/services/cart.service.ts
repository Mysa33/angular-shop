import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  doTotal(data:any[], total:number, vat:number):number{
    
    const reducer = (a:number, b:number) => a + b;
    const priceArray = data.map(elem =>Number(elem.price) );
    let subTotal:number = 0;
    subTotal = priceArray.reduce(reducer);
    let returnedVal:number;
    let vatVal = this.calcVat(returnedVal, subTotal, vat);
    total = Number((subTotal + vatVal).toFixed(2));
    return total;

  }

  calcVat(value:number, subTotal:number, vat:number):number{

    value = Number(((subTotal/100)*vat).toFixed(2));
    return value;

  }

}
