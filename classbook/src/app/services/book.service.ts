import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    {
      name: 'Scrum 360',
      category: 'Programação',
      url: 'https://example.com/clean-code'
    },
    {
      name: 'Design Patterns',
      category: 'Arquitetura',
      url: 'https://example.com/design-patterns'
    },
    {
      name: 'O Programador Pragmático',
      category: 'Carreira',
      url: 'https://example.com/pragmatic-programmer'
    }
  ];

  getBooks(): Book[] {
    return this.books;
  }
}
