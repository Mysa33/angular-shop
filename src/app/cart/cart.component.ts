import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../shared/services/share-data.service';

@Component({
  selector: 'app-cart',
  template: `
    <div class="container cart-page-container">
      <div class="row">
        <div class="col-lg-12">
        
          <h2>{{pageName}}</h2>

        </div>
      </div>
      <div class="row cart-list-row">
        <div class="col-lg-12 list-group-item" *ngFor="let item of data; let i = index">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
              <img src="{{item.imgUrl}}" alt="item.name"/>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <h6>{{item.name}}</h6>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
              <h6>Price :  {{item.price}}$</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="row cart-total-row">
        <div class="col-lg-12"><span>Sub-total : </span></div>
        <div class="col-lg-12"><span>V.A.T : 20%</span></div>
        <div class="col-lg-12"><h5>Total : $</h5></div>
      </div>
    </div>
  `,
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public pageName:string = "cart";
  public data:any[] = [];

  constructor(private _SaheData:ShareDataService) { }

  ngOnInit() {

    this.data = this._SaheData.cartItems;

  }

}
