import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Input() items;
  @Output() addItem = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  OnClick(i) {
    this.addItem.next(i);
  }
}
