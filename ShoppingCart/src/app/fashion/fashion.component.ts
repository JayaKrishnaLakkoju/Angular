import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {
  cart = [];

  fash = [{name: 'shirt', image: '/assets/images/fashion1.jpg'},
        {name: 'tee',   image: '/assets/images/fashion2.jpg'}];
  constructor(private values: CartService) { }

  ngOnInit() {
  }

  add(fash) {
   this.values.items.push(fash);
   this.cart = this.values.items;
  }

}
