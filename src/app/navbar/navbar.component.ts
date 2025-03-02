import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, MatIconModule, RouterModule],
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor() {}

  changeLanguage(lang: string) {
    console.log('Selected language:', lang);
    // Gọi API hoặc thay đổi ngôn ngữ ở đây
  }

  debug() {
    console.log('Clicked SIGN UP');
  }
}
