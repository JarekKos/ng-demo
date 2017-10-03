import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/filter';

@Injectable()
export class ShopList {
  list = [
    {id: 1, name: 'cheese'},
    {id: 2, name: 'egs'},
    {id: 3, name: 'bred'},
    {id: 4, name: 'carrots'},
    {id: 5, name: 'salad'},
  ];

  getList() {
    return Observable.of(this.list);
  }
}
