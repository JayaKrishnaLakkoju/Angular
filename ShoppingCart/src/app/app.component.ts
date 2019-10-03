import { Component, Input } from '@angular/core';
import { CartService } from './cart.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingCart';
  // @Input() public number: number;

  // hey = [];
  // constructor(private object: CartService) {
  //  this.hey = this.object.items;
  // }
}
