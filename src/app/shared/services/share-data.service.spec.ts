import { async, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ShareDataService } from './share-data.service';

describe('ShareDataService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [ShareDataService]
    });

  }));

  it('should be created', () => {
    const service: ShareDataService = TestBed.get(ShareDataService);
    expect(service).toBeTruthy();
  });

  it('should be injected', inject([ShareDataService], (service: ShareDataService) => {
    expect(service).toBeTruthy();
  }));

  it('should products to be defined', inject([ShareDataService], (service: ShareDataService) => {
    expect(service.products).toBeTruthy();
    expect(service.products).toBeDefined();
  }));

  it('should modalItem to be defined', inject([ShareDataService], (service: ShareDataService) => {
    expect(service.modalItem).toBeTruthy();
    expect(service.modalItem).toBeDefined();
  }));

  it('should cartItems to be defined', inject([ShareDataService], (service: ShareDataService) => {
    expect(service.cartItems).toBeTruthy();
    expect(service.cartItems).toBeDefined();
  }));

  it('should products to be array', inject([ShareDataService], (service: ShareDataService) => {
    expect(service.products).toEqual(jasmine.any(Array));
  }));

  it('should modalItem to be object', inject([ShareDataService], (service: ShareDataService) => {
    expect(service.modalItem).toEqual(jasmine.any(Object));
  }));

  it('should cartItems to be array', inject([ShareDataService], (service: ShareDataService) => {
    expect(service.cartItems).toEqual(jasmine.any(Array));
  }));

});
