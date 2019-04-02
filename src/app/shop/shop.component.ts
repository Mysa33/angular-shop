import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
