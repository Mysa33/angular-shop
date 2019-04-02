import { async, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { HttpClientModule } from '@angular/common/http';
import { ShopService } from './shop.service';
import { Observable } from 'rxjs';

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
    let url = service.url
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

});
