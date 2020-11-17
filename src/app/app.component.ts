import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-shoppingcart';
  items = [
    {name:"milo", desc:"A nice hot drink", img:"../assets/images/milo.png", qty:1},
    {name:"coffee", desc:"Also a nice hot drink", img:"../assets/images/coffee.png", qty:1},
    {name:"tea", desc:"A good hot drink", img:"../assets/images/tea.png", qty:1}

  ];
  cart = [];
  
  ngOnInit(): void {
  }

  appAddItem (i) {
    if (this.cart.includes(this.items[i])) {
      this.cart[this.cart.indexOf(this.items[i])].qty += 1;
    } else {
      this.cart.push(this.items[i]);
    }
  }

  appRemoveItem (i) {
    this.cart[i].qty = 1;
    this.cart.splice(i, 1);
  }
}
