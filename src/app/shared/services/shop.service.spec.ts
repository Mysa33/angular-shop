import { async, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ShopService } from './shop.service';
import { MockProducts } from '../../../fixtures/mock-products';

describe('ShopService', () => {
  beforeEach(async(() => {

    let httpMock: HttpTestingController;
    let dataService: ShopService;
    

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [ShopService]
    });
    dataService = TestBed.get(ShopService);
    httpMock = TestBed.get(HttpTestingController);

  }));

  it('should be created', () => {
    const service: ShopService = TestBed.get(ShopService);
    expect(service).toBeTruthy();
  });

  it('should be injected', inject([ShopService], (service: ShopService) => {
    expect(service).toBeTruthy();
  }));

  it('should url to be defined', inject([ShopService], (service: ShopService) => {
    expect(service.url).toBeTruthy();
    expect(service.url).toBeDefined();
  }));

  it('should url to be string', inject([ShopService], (service: ShopService) => {
    let url = service.url;
    expect(url).toEqual(jasmine.any(String));
  }));

  it('should getData() to be truthy', inject([ShopService], (service: ShopService) => {
    expect(service.getData()).toBeTruthy();
  }));

  it('should getData() return observable', inject([ShopService], (service: ShopService) => {
    let data = service.getData()
    expect(data).toBeTruthy();
    expect(data).toBeDefined();
    expect(data).not.toBeNull();
    expect(data).toEqual(jasmine.any(Observable));
  }));

  it('should setProduct() return an array', inject([ShopService], (service: ShopService) => {
    let mock = new MockProducts().setMock();
    let data = service.setProduct(mock);
    expect(data).toBeTruthy();
    expect(data).toBeDefined();
    expect(data).not.toBeNull();
    expect(data).toEqual(jasmine.any(Array));
  }));

  it('should setProduct() returned array length to equal mock array length', inject([ShopService], (service: ShopService) => {
    let mock = new MockProducts().setMock();
    let data = service.setProduct(mock);
    let mockLn = mock.length;
    let dataLn = data.length;
    expect(dataLn).toEqual(mockLn);
  }));

  it('should showMore() return number', inject([ShopService], (service: ShopService) => {
    let mock = new MockProducts().setMock();
    let itemsNb = service.showMore(10,10,mock);
    expect(itemsNb).toBeTruthy();
    expect(itemsNb).toBeDefined();
    expect(itemsNb).not.toBeNull();
    expect(itemsNb).toEqual(jasmine.any(Number));
  }));

  it('should showMore() return 20', inject([ShopService], (service: ShopService) => {
    let mock = new MockProducts().setMock();
    let itemsNb = service.showMore(10,10,mock);
    expect(itemsNb).toBeTruthy();
    expect(itemsNb).toBeDefined();
    expect(itemsNb).not.toBeNull();
    expect(itemsNb).toEqual(jasmine.any(Number));
    expect(itemsNb).toEqual(20);
  }));

  it('should showLess() return number', inject([ShopService], (service: ShopService) => {
    let itemsNb = service.showLess(20,10);
    expect(itemsNb).toBeTruthy();
    expect(itemsNb).toBeDefined();
    expect(itemsNb).not.toBeNull();
    expect(itemsNb).toEqual(jasmine.any(Number));
  }));

  it('should showLess() return 20', inject([ShopService], (service: ShopService) => {
    let itemsNb = service.showLess(20,10);
    expect(itemsNb).toBeTruthy();
    expect(itemsNb).toBeDefined();
    expect(itemsNb).not.toBeNull();
    expect(itemsNb).toEqual(jasmine.any(Number));
    expect(itemsNb).toEqual(10);
  }));

});
