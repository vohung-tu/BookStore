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
}
