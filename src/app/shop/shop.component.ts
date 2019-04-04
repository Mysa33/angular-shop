import { Component, OnInit } from '@angular/core';
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
        <div class="input-group mb-3">    
          <input type="search" class="form-control" placeholder ="Rechercher par entreprise">          
        </div>
      </div>
      <div class="row shop-products-row" *ngIf = "!loaderVis"> 
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 " *ngFor="let item of products; let i = index">
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
                  <div class="col-lg-2">Add to cart</div>
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

  constructor(private _ProductsService:ShopService, private _ShareData:ShareDataService) { }

  ngOnInit() {
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
        return this.products;
      }
    );
    
  }

  setProducts(data:any[]):any[]{
    
    data = this._ProductsService.setProduct(data);
    return data;

  } 

  addToCart(data:any[],i:number,cart:any):any[]{
    
    cart = this._ShareData.cartItems;
    cart.push(data[i]);
    return cart;
    
  }

}
