import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/store/cart/cart.component';
import { ProductContainerComponent } from './components/store/product-container/product-container.component';

const routes: Routes = [
  { path: '', component: ProductContainerComponent},
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
