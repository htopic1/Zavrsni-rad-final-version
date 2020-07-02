import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { homePageComponent } from './homePage/homePage.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './menu/login/login.component';
import { SignupComponent } from './menu/signup/signup.component';
import { SlidesComponent } from './slides/slides.component';
import { MoreComponent } from './slides/more/more.component';
import { SignComponent } from './sign/sign.component';


@NgModule({
  declarations: [
    AppComponent,
    homePageComponent,
    MenuComponent,
    LoginComponent,
    SignupComponent,
    SlidesComponent,
    MoreComponent,
    SignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
