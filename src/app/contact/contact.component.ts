import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  template: `
    <div class="container contact-page-container">
      <div class="row">
        <div class="col-lg-12">
          <h2>{{pageName}}</h2>
        </div>
      </div>
      <div class="row">
        <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail">Email *</label>
              <input type="email" class="form-control" name="inputEmail" formControlName="inputEmail" placeholder="Email" required="required">
            </div>
            <div class="form-group col-md-6">
              <label for="inputName">Nom *</label>
              <input type="text" class="form-control" name="inputName" formControlName="inputName" placeholder="Nom" required="required">
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Adresse</label>
            <input type="text" class="form-control" name="inputAddress" formControlName="inputAddress" placeholder="Votre adresse">
          </div>
          <div class="form-group">
            <label for="inputAddress2">Complément d'adresse</label>
            <input type="text" class="form-control" name="inputAddress2" formControlName="inputAddress2" placeholder="Appartement, studio, ou étage">
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">Ville</label>
              <input type="text" class="form-control" name="inputCity" formControlName="inputCity" placeholder="Votre ville">
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Code postal</label>
              <input type="text" class="form-control" name="inputZip" formControlName="inputZip" placeholder = "75008">
            </div>
            
            <div class="form-group col-md-12">
              <div class="form-group col-md-5 ecom-title-wrapper">
                <label for="inputZip">Titre</label>
                  <input type="text" class="form-control" name="inputTitle" formControlName="inputTitle" placeholder = "Titre">
              </div>
              <label for="inputTxt">Votre message *</label>
              <textarea rows="10" class="form-control" name="inputTxt" formControlName="inputTxt" placeholder="Votre message" required="required">
              </textarea>
            </div>
          </div>
          
          <button type="submit" class="btn btn-primary" [disabled]="!contactForm.valid">Envoyer</button>
          
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public pageName:string = "contact";
  //public contactForm:FormGroup;

  constructor() { }

  ngOnInit() {

  }

  contactForm = new FormGroup({
    inputEmail: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(30)]),
    inputName: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(10)]),
    inputAddress: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    inputAddress2: new FormControl(''),
    inputCity: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    inputZip: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(8)]),
    inputTitle : new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(15)]),
    inputTxt: new FormControl('',[Validators.required, Validators.minLength(20), Validators.maxLength(250)])
  });

  onSubmit(){

  }

}
