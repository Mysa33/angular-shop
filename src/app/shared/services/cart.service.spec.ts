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

});
