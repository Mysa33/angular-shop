import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="container contact-page-container">
      <div class="row">
        <div class="col-lg-12">
        
          <h2>{{pageName}}</h2>

        </div>
      </div>
    </div>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public pageName:string = "contact";

  constructor() { }

  ngOnInit() {
  }

}
