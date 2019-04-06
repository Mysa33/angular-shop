import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ModalComponent } from './widgets/modal/modal.component';
import { LoaderComponent } from './widgets/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    CartComponent,
    ContactComponent,
    HeaderComponent,
    NavComponent,
    ModalComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterTestingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
