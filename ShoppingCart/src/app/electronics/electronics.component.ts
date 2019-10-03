import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  cart = [];
  elec = [{name: 'asus',  image: '/assets/images/electronic1.jpg'},
        {name: 'dell'  ,  image: '/assets/images/electronic2.jpg'}];

  constructor(private values: CartService) { }

  ngOnInit() {
  }

  add(elec) {
   this.values.items.push(elec);
   this.cart = this.values.items;
  }
}
