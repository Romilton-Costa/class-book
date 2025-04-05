import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { BookService } from '../services/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-book-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  books : Book[]=[];
  categorias:string[]=[];
  categoriaSelecionada: string = 'all';
  constructor(private bookservice:BookService){}
  ngOnInit(): void {
    this.books=this.bookservice.getBooks();
    const categoriasUnicas = [...new Set(this.books.map(book => book.category))];
    this.categorias = ['Todas', ...categoriasUnicas];
  }

  get livrosFiltrados(): Book[] {
    if (this.categoriaSelecionada === 'Todas') {
      return this.books;
    }

    return this.books.filter(book => book.category === this.categoriaSelecionada);
  }
}
