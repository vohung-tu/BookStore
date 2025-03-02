import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, MatIconModule],
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  changeLanguage(lang: string) {
    console.log('Selected language:', lang);
    // Gọi API hoặc thay đổi ngôn ngữ ở đây
  }
}
