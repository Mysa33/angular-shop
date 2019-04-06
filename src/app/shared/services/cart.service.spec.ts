import { async, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CartService } from './cart.service';

describe('CartService', () => {
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [CartService]
    });

  }));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });

  it('should be injected', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));

  /*it('should doTotal() to be defined', inject([CartService], (service: CartService) => {
    let data:any[] = [17.9,15.86,20.99];
    let total:number;
    let vat:number = 20;
    expect(service.doTotal(data, total, vat)).toBeDefined();
  }));*/

  it('should calcVat() to be defined', inject([CartService], (service: CartService) => {
    let value:number;
    let subTotal:number = 143;
    let vat:number = 20;
    expect(service.calcVat(value, subTotal, vat)).toBeTruthy();
    expect(service.calcVat(value, subTotal, vat)).toBeDefined();
  }));

  it('should calcVat() return a number', inject([CartService], (service: CartService) => {
    let value:number;
    let subTotal:number = 143;
    let vat:number = 20;
    value = service.calcVat(value, subTotal, vat);
    expect(value).toBeTruthy();
    expect(value).toBeDefined();
    expect(value).not.toBeNull();
    expect(value).toEqual(jasmine.any(Number))
  }));

  it('should calcVat() returned value to equal 28.6', inject([CartService], (service: CartService) => {
    let value:number;
    let subTotal:number = 143;
    let vat:number = 20;
    value = service.calcVat(value, subTotal, vat);
    expect(value).not.toBeNull();
    expect(value).toEqual(jasmine.any(Number));
    expect(value).toEqual(28.6);
  }));

});
