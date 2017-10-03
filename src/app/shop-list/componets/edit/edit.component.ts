import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

import { ShopList } from '../../services/shopList';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  item$;

  constructor(private route: ActivatedRoute, private shopList: ShopList) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.shopList.getList().subscribe(items => {
        this.item$ = items.filter(item => item.id === +params.get('id'));
      });
    });
  }

}
