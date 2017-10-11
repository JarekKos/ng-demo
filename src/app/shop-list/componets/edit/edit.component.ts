import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

import { ShopList } from '../../services/shopList';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  item;
  form: FormGroup = null;

  constructor(
    private route: ActivatedRoute,
    private shopList: ShopList,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.shopList.getList().subscribe(elements => {
        this.item = elements.filter(element => element.id === +params.get('id'))[0];

        this.form = this.fb.group({
          itemName: new FormControl(this.item.name, [Validators.required])
        });
      });
    });
  }

  onSubmit() {
    this.shopList.updateItem(this.item.id, this.form.value.itemName);
  }

  cancel() {
    this.form.patchValue({itemName: this.item.name});
  }

  canDeactivate() {
    console.log(this.form.get('itemName'));
    return this.item.name === this.form.get('itemName').value;
  }

}
