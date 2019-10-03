import { Component, OnInit } from '@angular/core';
import { SeeService } from '../see.service';

@Component({
  selector: 'app-see',
  templateUrl: './see.component.html',
  styleUrls: ['./see.component.css'],
})
export class SeeComponent implements OnInit {

  // public employees = [];
  public heyy: any;

  public letter: any;

  constructor(private seeservice: SeeService) { }

  ngOnInit() {
    // this.employees = this.seeservice.getEmployees();
    // this.heyy = this.seeservice.heystatus();
    this.letter = this.seeservice.heystatus();
    this.heyy = this.letter.charAt(0).toUpperCase() + this.letter.slice(1);
  }

}
