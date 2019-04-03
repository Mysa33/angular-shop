import { Component, OnInit } from '@angular/core';
import {ShopService} from '../shared/services/shop.service';

@Component({
  selector: 'app-shop',
  template: `
    <div class="container shop-page-container">
      <div class="row">
        <div class="col-lg-12">
        
          <h2>{{pageName}}</h2>

        </div>
      </div>
    </div>
  `,
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  public pageName:string = "shop";
  public products:any;

  constructor(private _ProductsService:ShopService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts():any{
    
    this._ProductsService.getData().subscribe(
      data => { 
        this.products = data;
        console.log("products :", this.products);
        this.setProducts(this.products);
        return this.products;
      },
      err => console.error(err),
      () => console.log('done loading products')
    );
    
  }

  setProducts(data:any[]):any[]{
    
    data = this._ProductsService.setProduct(data);
    return data;

  } 

}
