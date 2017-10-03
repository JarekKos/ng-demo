import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopListRoutingModule } from './shop-list-routing.module';
import { ListComponent } from './componets/list/list.component';
import { ShopList } from './services/shopList';



@NgModule({
  imports: [
    CommonModule,
    ShopListRoutingModule,
  ],
  declarations: [ListComponent],
  providers: [ShopList]
})
export class ShopListModule { }
