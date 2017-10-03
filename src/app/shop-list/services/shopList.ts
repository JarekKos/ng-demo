import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ShopList {
  list = [
    'cheese',
    'egs',
    'bred',
    'carrots',
    'salad',
  ];

  getList() {
    return Observable.of(this.list);
  }
}
