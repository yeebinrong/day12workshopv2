import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-shoppingcart';
  items = [
    {name:"milo", desc:"A nice hot drink", img:"assets/images/milo.png", qty:1},
    {name:"coffee", desc:"Also a nice hot drink", img:"assets/images/coffee.png", qty:1},
    {name:"tea", desc:"A good hot drink", img:"assets/images/tea.png", qty:1}

  ];
  cart = [];
  
  ngOnInit(): void {
  }

  appAddItem (i) {     
    for (let item of this.cart) {
      if (item.name == this.items[i].name) {
        item.qty = item.qty + 1;
        return;
      }
    }
    const copied = Object.assign({}, this.items[i]);
    this.cart.push(copied);
  } 

  appRemoveItem (i) {
    this.cart.splice(i, 1);
  }
}
