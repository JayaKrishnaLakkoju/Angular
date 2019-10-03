import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this-pro';
  public list = '';
  public dummy = [];
  public temp = false;

  // first step parent to child data sharing....
  // public name = 'jay krishna';
  // public fame = 'hey ram';
  // public message = '';

  submit() {
       this.dummy.push(this.list);
       this.list = '';

      // tslint:disable-next-line: align
      if (this.dummy.length >= 5) {
           this.temp = true;
      }

  }
}
