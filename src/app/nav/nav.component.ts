import { Component, OnInit } from '@angular/core';

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
            <a class="nav-link custom-link" routerLink="/cart">Cart</a>
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

  constructor() { }

  ngOnInit() {
  }

}
