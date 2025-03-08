import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarModule } from './navbar/navbar.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import Swiper from 'swiper';

@NgModule({
  declarations: [
    AppComponent, 
    HomepageComponent,
    NavbarComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule, //sử dụng reactive form để tạo form trang đăng ký/đăng nhập
    MatFormFieldModule,   // Material Form Field
    MatInputModule,
    Swiper,     
  ],
  providers: [],
})
export class AppModule { }
