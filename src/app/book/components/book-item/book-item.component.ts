import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../model/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() book: Book | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
