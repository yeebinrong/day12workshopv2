import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shoppingcart/shopping-cart.component';
import { MyCartComponent } from './mycart/my-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    MyCartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
