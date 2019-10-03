import { Injectable } from '@angular/core';

@Injectable()
export class SeeService {

  public h = 'fisson located a hyderabad';
  constructor() { }

getEmployees() {
  return [ {num: 1, name: 'jay', school: 'ups'}];
}

heystatus() {
// return 'fission labs located at hyderabad.';
return this.h;
}

}
