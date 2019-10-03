import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent {
arrr = [];
constructor(private obj: CartService) {
this.arrr = this.obj.items;
}

rem() {
return this.arrr.splice(0, 1);
}

}
