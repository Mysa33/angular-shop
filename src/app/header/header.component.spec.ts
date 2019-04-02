import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import { Router} from "@angular/router";
import {Location} from "@angular/common";

import { HeaderComponent } from './header.component';
import { routes } from '../app-routing.module';
import { ShopComponent } from '../shop/shop.component';
import { CartComponent } from '../cart/cart.component';
import { ContactComponent } from '../contact/contact.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let compiled;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HeaderComponent,
        ShopComponent,
        CartComponent,
        ContactComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [
        RouterTestingModule.withRoutes(routes)
      ]
    })
    .compileComponents();
  }));

  beforeEach(async() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render div tag', fakeAsync(() => {
    expect(compiled.querySelector('div')).toBeTruthy();
  }));

  it('should render at least one div tag', fakeAsync(() => {
    expect((compiled.querySelectorAll('div')).length).toBeGreaterThanOrEqual(1);
  }));

  it('navigate to "shop" takes you to /shop', fakeAsync(() => {
    router.navigate(['shop']);
    tick();
    expect(location.path()).toBe('/shop');
  }));

  it('navigate to "cart" takes you to /cart', fakeAsync(() => {
    router.navigate(['cart']);
    tick();
    expect(location.path()).toBe('/cart');
  }));

  it('navigate to "contact" takes you to /contact', fakeAsync(() => {
    router.navigate(['contact']);
    tick();
    expect(location.path()).toBe('/contact');
  }));
  
});
