import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { homePageComponent } from './homePage/homePage.component';


const routes: Routes = [
  {path:'homePage',component: homePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
