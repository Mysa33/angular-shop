import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {ShopService} from '../shared/services/shop.service';
import { ShareDataService } from '../shared/services/share-data.service';

@Component({
  selector: 'app-shop',
  template: `
    <div class="container shop-page-container">
      <div class="row">
        <div class="col-lg-12">
          <h2>{{pageName}}</h2>
        </div> 
      </div>
      <div class="row shop-search-row">
        <div class="input-group col-lg-5">    
          <input type="search" class="form-control" [(ngModel)]="queryString" placeholder ="search by name">          
        </div>
        <div class="col-lg-4">
          Displayed : {{displayedItems}}/{{itemsNb}}
        </div>

        <div class="col-lg-3">
          <button class="btn">
            <i class="material-icons" (click)="showLess(displayedItems, increm);">
              remove_circle
            </i>
        
          </button>
          <button class="btn shop-more-btn">
            <i class="material-icons btn-icon" (click)="showMore(displayedItems, increm, products);">
              add_circle
            </i>
          </button>
        </div>

      </div>
      <div class="row shop-products-row" *ngIf = "!loaderVis"> 
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 " *ngFor="let item of  products | filterData: queryString : 'name' | slice:0:displayedItems; let i = index">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="{{item.imgUrl}}" alt="{{item.name}}"/>
            <hr>
            <div class="card-body">
              <h5 class="card-title">{{item.name}}</h5>
              <p class="card-text">
                Price : {{item.price}} $ 
              </p>
              <button class="btn shop-add-to-cart-btn" (click)="addToCart(products, i, cart)">
                <div class="row">
                  <div class="col-lg-2"><i class="material-icons">shop</i></div>
                  <div class="col-lg-2">Add</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  public pageName:string = "shop";
  public products:any;
  public loaderVis:boolean = true;
  public cart = [];
  public itemsNb:number = 0;
  public displayedItems:number;
  public increm:number = 10;

  constructor(
    private _ProductsService:ShopService, 
    private _ShareData:ShareDataService,
    private _ShopService:ShopService
    ) { }

  ngOnInit() {

    this.displayedItems = 10;
    this.loaderVis = true;
    this.getProducts();
    
  }

  getProducts():any{
    
    this._ProductsService.getData().subscribe(
      data => { 
        this.products = data;
        return this.products;
      },
      err => console.error(err),
      () => {
        console.log('done loading products');
        this.products = this.setProducts(this.products);
        this.loaderVis = false;
        this.itemsNb = this.products.length;
        return this.products;
      }
    );
    
  }

  setProducts(data:any[]):any[]{
    
    data = this._ProductsService.setProduct(data);
    return data;

  } 

  addToCart(data:any[], i:number, cart:any):any[]{
    
    cart = this._ShareData.cartItems;
    cart.push(data[i]);
    this._ShareData.sendData(cart);
    return cart;
    
  }

  showMore(disItems:number, nb:number, items):number{
    
    disItems = this._ShopService.showMore(disItems, nb, items);
    return this.displayedItems = disItems;

  }

  showLess(disItems:number, nb:number){

    disItems = this._ShopService.showLess(disItems, nb);
    return this.displayedItems = disItems;

  }
}
