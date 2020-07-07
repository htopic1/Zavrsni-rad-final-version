import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { homePageComponent } from './homePage/homePage.component';
import { ProductComponent } from './products/products.component';


const routes: Routes = [
  {path:'',component: homePageComponent},
  {path:'products',component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
