import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {


  hey = [];

  ngOnInit() {
  }
  constructor(private object: CartService) {
   this.hey = this.object.items;
}
}
