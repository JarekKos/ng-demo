import { Component, OnInit } from '@angular/core';
import { ShopList } from '../../services/shopList';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items$: Observable<Array<{id, name}>>;

  constructor(private shopList: ShopList) { }

  ngOnInit() {
    this.items$ = this.shopList.getList();
  }

}
