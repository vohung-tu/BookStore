import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../service/books.service';
import { BookDetails } from '../../model/books-details.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule, 
    MatIconModule,
    MatInputModule, 
    RouterModule
  ],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit{
  books: BookDetails | undefined;
  quantity: number = 1;
  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBookById(id).subscribe((data) => {
      this.books = data;
    });
  }

  // Hàm tăng số lượng
  increaseQty(): void {
    this.quantity++;
  }

  // Hàm giảm số lượng (không giảm dưới 1)
  decreaseQty(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
