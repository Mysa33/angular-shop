import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <p>
      loader works!
    </p>
  `,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
