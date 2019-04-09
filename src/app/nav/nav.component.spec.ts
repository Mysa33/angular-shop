import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterModule} from "@angular/router";

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let compiled;
  let router: Router ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render div tag', fakeAsync(() => {
    expect(compiled.querySelector('div')).toBeTruthy();
  }));

  it('should render nav tag', fakeAsync(() => {
    fixture.detectChanges();
    expect(compiled.querySelector('nav')).toBeTruthy();
  }));

  it('should render ul tag', fakeAsync(() => {
    expect(compiled.querySelector('ul')).toBeTruthy();
  }));

  it('should render li tag', fakeAsync(() => {
    expect(compiled.querySelector('li')).toBeTruthy();
  }));

  it('should render a tag', fakeAsync(() => {
    expect(compiled.querySelector('a')).toBeTruthy();
  }));

  it('should render 4 li tag', fakeAsync(() => {
    expect(compiled.querySelectorAll('li').length).toEqual(4);
  }));

  it('should render 4 a tag', fakeAsync(() => {
    fixture.detectChanges();
    expect(compiled.querySelectorAll('a').length).toEqual(4);
  }));

  it('should contain text', fakeAsync(() => {
    expect(compiled.querySelector('nav').textContent).toBeTruthy();
  }));

  it('should a tag contain text', fakeAsync(() => {
    expect(compiled.querySelector('a').textContent).toBeTruthy();
  }));

  it('should first li tag text to equal "home"', fakeAsync(() => {
    let elem = compiled.querySelector('ul');
    let child = elem.firstChild;
    expect(child.textContent).toBeTruthy(); 
    expect(child.textContent).toEqual(" home ");
  }));

  it('should second li tag text to equal "Shop"', fakeAsync(() => {
    let elem = compiled.querySelector('ul');
    let child = elem.firstChild.nextSibling;
    expect(child.textContent).toBeTruthy(); 
    expect(child.textContent).toEqual("Shop");
  }));

  it('should third li tag text to contain "Cart"', fakeAsync(() => {
    let elem = compiled.querySelector('ul');
    let child = elem.lastChild.previousSibling;
    expect(child.textContent).toBeTruthy(); 
    expect(child.textContent).toContain("Cart");
  }));

  it('should last li tag text to equal "Contact"', fakeAsync(() => {
    let elem = compiled.querySelector('ul');
    let child = elem.lastChild;
    expect(child.textContent).toBeTruthy(); 
    expect(child.textContent).toEqual("Contact");
  }));

});
