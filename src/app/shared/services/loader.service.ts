import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  
  loaderFlag:boolean = true;

  constructor() { }
}
