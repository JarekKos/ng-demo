import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.item = data.product;
      this.form = this.fb.group({
        itemName: [this.item.name, Validators.required]
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
