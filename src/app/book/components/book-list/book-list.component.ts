import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  _books: Book[] = [];
  books: Book[] = [];

  constructor(
    private bookService: BooksService
  ) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(
      data => {
        this._books = [...data];
        this.books = [...this._books];
      }
    )
  }

  applyPriceFilter(filter: any){
    this.books = [...this._books];
    if(filter.fromPrice != null && filter.toPrice != null){
      this.books = this.books.filter(
        book => book.price >= filter.fromPrice && book.price <= filter.toPrice
      );
    }    
  }

}
