import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { homePageComponent } from './homePage/homePage.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './menu/login/login.component';
import { SignupComponent } from './menu/signup/signup.component';
import { SlidesComponent } from './homePage/slides/slides.component';
import { MoreComponent } from './homePage/slides/more/more.component';
import { SignComponent } from './sign/sign.component';
import { ProductComponent } from './products/products.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    homePageComponent,
    MenuComponent,
    LoginComponent,
    SignupComponent,
    SlidesComponent,
    MoreComponent,
    SignComponent,
    ProductComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
