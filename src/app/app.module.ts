import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientModule  } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ModalComponent } from './widgets/modal/modal.component';
import { LoaderComponent } from './widgets/loader/loader.component';
import { FilterDataPipe } from './shared/pipes/filter-data.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    CartComponent,
    ContactComponent,
    HeaderComponent,
    NavComponent,
    ModalComponent,
    LoaderComponent,
    FilterDataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterTestingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
