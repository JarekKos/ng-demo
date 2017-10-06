import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ShopListRoutingModule } from './shop-list-routing.module';
import { ListComponent } from './componets/list/list.component';
import { EditComponent } from './componets/edit/edit.component';
import { ShopList } from './services/shopList';



@NgModule({
  imports: [
    CommonModule,
    ShopListRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ListComponent, EditComponent],
  providers: [ShopList]
})
export class ShopListModule { }
