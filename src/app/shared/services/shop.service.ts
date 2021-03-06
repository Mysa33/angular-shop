import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  public url:string = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  public itemsNb:number;

  constructor( private _http:HttpClient ) { }
  
  getData() {

    return this._http.get(this.url);

  }

  setProduct(data:any[]):any[]{

    var item:object = new Object;
    var items:any[] = [];
    for(let i in data){
      item = {
        'id':data[i].id,
        'brand':data[i].brand,
        'price':data[i].price,
        'name':data[i].name,
        'description':data[i].description,
        'rating':data[i].rating,
        'imgUrl':data[i].api_featured_image,
        'colors':data[i].product_colors
      };
      items.push(item);
    }  
    return data = items;
  }

  showMore(elems:number, nb:number, items:any[]):number{

    let displayed = elems + nb;
    console.log("number:", displayed);
    if((items.length)<(displayed)){
      return elems = items.length;
    }else{
      return elems = displayed;
    }
    
  }

  showLess(elems:number, nb:number):number{
    if(elems == nb){
      return elems = nb;
    }else{
      return elems = elems - nb;
    }
    
  }

  checkValue(elems:number, nb:number){

  }

}
