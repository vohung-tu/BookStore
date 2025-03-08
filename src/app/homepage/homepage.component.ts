import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  constructor() {}
}
