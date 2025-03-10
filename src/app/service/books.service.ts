import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BookDetails } from '../model/books-details.model';
import { MOCK_BOOKS } from '../model/mock-books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }
  
  getBook(): Observable<BookDetails[]> {
    return of(MOCK_BOOKS);
  }

  getBookById(id: number): Observable<BookDetails | undefined> {
    // Tìm sách trong mảng MOCK_BOOKS
    const book = MOCK_BOOKS.find(b => b.book_id === id);
    // Trả về Observable
    return of(book);
  }
}
