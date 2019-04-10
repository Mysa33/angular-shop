import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FilterDataPipe } from '../shared/pipes/filter-data.pipe';

@Component({
  selector: 'app-header',
  template: `
    <div class="container-fluid fixed-top shop-header-container">
    
      <app-nav></app-nav>
    
    </div>  

  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
