import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(): Observable<Book[]>{
    return of(BOOKS);
  }
}

export var BOOKS: Book[] = [
  {id: 1, name: "Harry Potter 1", price: 23.90, quantity: 1, category: "Fantasy"},
  {id: 2, name: "Harry Potter 2", price: 23.50, quantity: 1, category: "Fantasy"},
  {id: 3, name: "Harry Potter 3", price: 31.90, quantity: 1, category: "Fantasy"},
  {id: 4, name: "Harry Potter 4", price: 22.41, quantity: 1, category: "Fantasy"},
  {id: 5, name: "Harry Potter 5", price: 22.41, quantity: 1, category: "Fantasy"},
  {id: 6, name: "Harry Potter 6", price: 22.41, quantity: 1, category: "Fantasy"},
  {id: 7, name: "Harry Potter 7", price: 35.69, quantity: 1, category: "Fantasy"},
  {id: 8, name: "Hobbit", price: 32.90, quantity: 1, category: "Fantasy"},
  {id: 9, name: "The Lord of Rings 1", price: 34.90, quantity: 1, category: "Fantasy"},
  {id: 10, name: "The Lord of Rings 2", price: 44.91, quantity: 1, category: "Fantasy"},
  {id: 11, name: "The Lord of Rings 3", price: 44.91, quantity: 1, category: "Fantasy"},
];