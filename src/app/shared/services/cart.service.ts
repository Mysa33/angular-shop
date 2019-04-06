import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  doTotal(data:any[], total:number, vat:number):number{
    
    const reducer = (a:number, b:number) => a + b;
    const priceArray = data.map(elem =>Number(elem.price) );
    console.log("Price array :", priceArray);
    let subTotal:number = Number((priceArray.reduce(reducer)).toFixed(2));
    console.log("SubTotal :", subTotal);
    let returnedVal:number;
    let vatVal = this.calcVat(returnedVal, subTotal, vat);
    total = subTotal + vatVal;
    console.log("total :", total)
    return total;

  }

  calcVat(value:number, subTotal:number, vat:number):number{

    value = Number(((subTotal/100)*vat).toFixed(2));
    return value;

  }

}
