import { async, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [LoaderService]
    });

  }));

  it('should be created', () => {
    const service: LoaderService = TestBed.get(LoaderService);
    expect(service).toBeTruthy();
  });

  it('should be injected', inject([LoaderService], (service: LoaderService) => {
    expect(service).toBeTruthy();
  }));

  it('should loaderFlag be defined', inject([LoaderService], (service: LoaderService) => {
    expect(service).toBeDefined();
  }));

  it('should loaderFlag be truthy', inject([LoaderService], (service: LoaderService) => {
    expect(service).toBeTruthy();
  }));

});
