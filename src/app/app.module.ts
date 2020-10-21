import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/store/product/product.component';
import { ProductContainerComponent } from './components/store/product-container/product-container.component';
import { CartComponent } from './components/store/cart/cart.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { CartItemComponent } from './components/store/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductContainerComponent,
    CartComponent,
    NavbarComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
