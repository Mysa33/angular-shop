import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports:[ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should page name to equal "contact"', () => {
    expect(component.pageName).toEqual('contact');
  });

  it('form invalid when empty', () => {
    expect(component.contactForm.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let errors = {};
    let email = component.contactForm.controls['inputEmail'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
    email.setValue("test");
    expect(errors['required']).toBeTruthy();
  });

  it('name field validity', () => {
    let errors = {};
    let name = component.contactForm.controls['inputName'];
    errors = name.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('address field validity', () => {
    let errors = {};
    let address = component.contactForm.controls['inputAddress'];
    errors = address.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should render div tag', fakeAsync(() => {
    expect(compiled.querySelector('div')).toBeTruthy();
  }));

  it('should render at least one div tag', fakeAsync(() => {
    expect((compiled.querySelectorAll('div')).length).toBeGreaterThanOrEqual(1);
  }));

  it('should render only one div.contact-page-container', async(() => {
    expect(compiled.querySelectorAll('div.contact-page-container').length).toEqual(1);
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

  it('should render 7 input tags', async(() => {
    expect((compiled.querySelectorAll('input')).length).toEqual(7);
  }));

  it('should render 1 email input', async(() => {
    expect((compiled.querySelectorAll('input[type=email]')).length).toEqual(1);
  }));

  it('should render 6 text input', async(() => {
    expect((compiled.querySelectorAll('input[type=text]')).length).toEqual(6);
  }));

  it('should render only one textarea tag', async(() => {
    expect((compiled.querySelectorAll('textarea')).length).toEqual(1);
  }));

});
