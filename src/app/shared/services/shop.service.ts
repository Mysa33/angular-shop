import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  public url:string = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  constructor( private _http:HttpClient ) { }
  
  getData() {

    return this._http.get(this.url);

  }
}
