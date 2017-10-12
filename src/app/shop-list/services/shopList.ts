import {EventEmitter, Injectable, Output} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ShopList {
  @Output() onListUpdate: EventEmitter<string> = new EventEmitter();
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

  getItemById(id) {
    const singleItem = this.list.filter(item => item.id === +id)[0];
    return Observable.of(singleItem).delay(500);
  }

  updateItem(id, value) {
    const newList = this.list.map(item => {
      if (item.id === id) {
        item.name = value;
      }
      return item;
    });

    this.list = newList;
    this.onListUpdate.emit();
  }
}
