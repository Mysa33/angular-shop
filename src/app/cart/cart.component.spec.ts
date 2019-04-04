import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should page name to equal "cart"', () => {
    expect(component.pageName).toEqual('cart');
  });

  it('should data to be defined', () => {
    expect(component.data).toBeDefined();
  });

  it('should data to be not null', () => {
    expect(component.data).not.toBeNull();
  });

  it('should data to be an array', () => {
    expect(component.data).toEqual(jasmine.any(Array));
  });

  it('should render div tag', fakeAsync(() => {
    expect(compiled.querySelector('div')).toBeTruthy();
  }));

  it('should render at least one div tag', fakeAsync(() => {
    expect((compiled.querySelectorAll('div')).length).toBeGreaterThanOrEqual(1);
  }));

  it('should render only one div.cart-page-container', async(() => {
    expect(compiled.querySelectorAll('div.cart-page-container').length).toEqual(1);
  }));

  it('should render div.row', async(() => {
    expect(compiled.getElementsByClassName('row')).toBeTruthy();
  })); 

  it('should render h2 tag', async(() => {
    expect(compiled.querySelectorAll('h2')).toBeTruthy();
  }));
  
  it('should render only one h2 tag', async(() => {
    expect((compiled.querySelectorAll('h2')).length).toEqual(1);
  }));

  it('should h2 tag text to equal "cart"', fakeAsync(() => {
    let elem = compiled.querySelector('h2');
    expect(elem.textContent).toBeTruthy(); 
    expect(elem.textContent).toEqual("cart");
  }));

});
