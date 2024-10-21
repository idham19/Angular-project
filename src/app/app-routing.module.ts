import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:"",redirectTo:'/home', pathMatch:"full" },
  {path:"home",component:HomeComponent, title:"home" },
  {path:"catalog",component:CatalogComponent, title:"catalog" },
  {path:"cart",component:CartComponent, title:"cart" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
