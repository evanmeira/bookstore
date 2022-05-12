import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book-filter',
  templateUrl: './book-filter.component.html',
  styleUrls: ['./book-filter.component.css']
})
export class BookFilterComponent implements OnInit {

  fromPrice = "";
  toPrice = "";

  @Output() priceFilterEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  applyPriceFilter(){
    this.priceFilterEvent.emit({fromPrice: this.fromPrice, toPrice: this.toPrice});
  }

  removePriceFilter(){
    this.fromPrice = "";
    this.toPrice = "";
    this.priceFilterEvent.emit({fromPrice: null, toPrice: null});
  }

}
