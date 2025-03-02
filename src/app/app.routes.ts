import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomepageComponent 
  }, // Trang chủ
  {
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  { 
    path: 'signup', 
    component: SignupComponent,
    title:'Sign Up' 
  }, // Trang đăng ký 
  { 
    path: 'signin', 
    component: SigninComponent,
    title:'Sign In' 
  }, // Trang đăng nhập
];

export default routes;
