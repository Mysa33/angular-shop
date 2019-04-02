import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: `
    <div class="container cart-page-container">
      <div class="row">
        <div class="col-lg-12">
        
          <h2>{{pageName}}</h2>

        </div>
      </div>
    </div>
  `,
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public pageName:string = "cart";

  constructor() { }

  ngOnInit() {
  }

}
