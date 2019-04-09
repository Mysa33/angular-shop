import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  public products:any[] = [];
  public modalItem:object = new Object;
  public cartItems:any[] = [];
  public headerInfos = new Subject<any>();

  constructor() {}

  sendData(data:any[]){
    
    this.headerInfos.next(data);

  }

}
