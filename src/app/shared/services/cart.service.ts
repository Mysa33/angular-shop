import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  doTotal(data:any[], total:number, vat:number):number{
    
    const reducer = (a:number, b:number) => a + b;
    const priceArray = data.map(elem =>Number(elem.price) );//declare subTotal in cart comp and like a param of this method
    console.log("Price array :", priceArray);
    let subTotal:number = 0;
    subTotal = priceArray.reduce(reducer);
    console.log("SubTotal :", subTotal);
    let returnedVal:number;
    let vatVal = this.calcVat(returnedVal, subTotal, vat);
    return total = subTotal + vatVal;

  }

  calcVat(value:number, subTotal:number, vat:number):number{

    value = Number(((subTotal/100)*vat).toFixed(2));
    return value;

  }

}
