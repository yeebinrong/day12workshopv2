import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  @Input() cart;
  @Output() removeItem = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  OnClick(i) {
    console.log(i);
    this.removeItem.next(i);
  }

}
