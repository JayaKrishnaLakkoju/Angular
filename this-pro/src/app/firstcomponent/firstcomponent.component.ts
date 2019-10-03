import { Component, OnInit, Input } from '@angular/core';
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {
  // @Input() public ParentData: any;
  // @Output() public childevent = new EventEmitter();
  // public message = '';
  @Input() public bind: any;
  constructor() { }
  ngOnInit() {
  }

}
