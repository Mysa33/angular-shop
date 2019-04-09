import { Component, OnInit } from '@angular/core';

import { ShareDataService } from '../shared/services/share-data.service';

@Component({
  selector: 'app-nav',
  template: `
    <div class="container shop-nav-container">
    
      <nav class="navbar nav-custom">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link custom-link-icon" routerLink="/shop">
              <i class="material-icons" style="font-size: 1.6em!important;font-weight: 200!important;color:#43b8d0!important;">
                home
              </i>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link home-link" routerLink="/shop" routerLinkActive="active">Shop</a>
          </li>
          <li class="nav-item">
            <a class="nav-link custom-link" routerLink="/cart">
              <span>Cart</span>
              <span class="badge badge-light hearder-custom-badge">
                {{itemsNb}}
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link custom-link" routerLink="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    
    </div>
  `,
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public itemsNb:number = 0;
  public data:any;
  constructor(private _SharedData:ShareDataService) {
    this._SharedData.headerInfos.subscribe(receivedData=>{
      this.data = receivedData;
      this.itemsNb =  this.data.length;
    });
  }

  ngOnInit() {
 
  }

}
