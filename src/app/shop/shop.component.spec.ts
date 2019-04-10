import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ShopComponent } from './shop.component';
import {ShopService} from '../shared/services/shop.service';
import { MockProducts } from '../../fixtures/mock-products';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;
  let compiled;
  const mockData:any[] = new MockProducts().setMock();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ShopComponent 
      ],
      providers:[
        ShopService
      ],
      imports:[
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should page name to equal "shop"', () => {
    expect(component.pageName).toEqual('shop');
  });

  it('should products to be undefined', () => {
    expect(component.products).toBeUndefined();
  });

  it('should products to be not null', () => {
    expect(component.products).not.toBeNull();
  });

  it('should loaderVis to be defined', () => {
    expect(component.loaderVis).toBeDefined();
  });

  it('should loaderVis to be boolean', () => {
    expect(component.loaderVis).toEqual(jasmine.any(Boolean));
  });

  it('should loaderVis to be truthy', () => {
    expect(component.loaderVis).toBeTruthy();
  });

  it('should setProducts() return an array', () => {
    expect(component.setProducts(mockData)).toEqual(jasmine.any(Array));
  });

  it('should setProducts() retured array length to be equal to mockData length', () => {
    let mockLenght = mockData.length;
    let returedLength = (component.setProducts(mockData)).length;
    expect(mockLenght).toEqual(returedLength);
  });

  it('should addTocart() return an array', () => {
    let i:number = 1;
    let cart = [];
    let cartData = component.addToCart(mockData,i,cart);
    expect(cartData).toEqual(jasmine.any(Array));
  });

  it('should addTocart() return not an empty array :', () => {
    let i:number = 1;
    let cart = [];
    let cartData = component.addToCart(mockData,i,cart);
    expect(cartData).toEqual(jasmine.any(Array));
    expect((cartData).length).toBeGreaterThan(0);
  });

  it('should showMore() to be defined ', () => {
    expect(component.showMore(10,10, mockData)).toBeDefined();
  });

  it('should showLess() to be defined ', () => {
    expect(component.showLess(10,10)).toBeDefined();
  });

  it('should render div tag', fakeAsync(() => {
    expect(compiled.querySelector('div')).toBeTruthy();
  }));

  it('should render at least one div tag', fakeAsync(() => {
    expect((compiled.querySelectorAll('div')).length).toBeGreaterThanOrEqual(1);
  }));

  it('should render only one div.shop-page-container', fakeAsync(() => {
    expect(compiled.querySelectorAll('div.shop-page-container').length).toEqual(1);
  }));

  it('should render div.row', fakeAsync(() => {
    expect(compiled.getElementsByClassName('row')).toBeTruthy();
  })); 

  it('should render h2 tag', fakeAsync(() => {
    expect(compiled.querySelectorAll('h2')).toBeTruthy();
  }));
  
  it('should render only one h2 tag', fakeAsync(() => {
    expect((compiled.querySelectorAll('h2')).length).toEqual(1);
  }));

  it('should render 2 div.row tag', fakeAsync(() => {
    expect((compiled.querySelectorAll('div.row')).length).toEqual(2);
  })); 

  it('should render only one input tag', fakeAsync(() => {
    expect((compiled.querySelectorAll('input')).length).toEqual(1);
  })); 

});
