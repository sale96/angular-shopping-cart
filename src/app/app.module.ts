import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/store/product/product.component';
import { ProductContainerComponent } from './components/store/product-container/product-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
