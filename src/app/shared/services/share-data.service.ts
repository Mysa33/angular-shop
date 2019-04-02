import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  public products:any[] = [];
  public modalItem:object = new Object;
  public cartItems:any[] = [];

  constructor() {}

}
