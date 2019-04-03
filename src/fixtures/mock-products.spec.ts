import { MockProducts } from './mock-products';

describe('MockProducts', () => {
  it('should create an instance', () => {
    expect(new MockProducts()).toBeTruthy();
  });

  it('should setData() return an array', () => {
    let data = new MockProducts().setMock();
    expect(data).toBeTruthy();
    expect(data).toEqual(jasmine.any(Array));
  });

});
