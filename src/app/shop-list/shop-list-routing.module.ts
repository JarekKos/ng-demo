import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { ListComponent } from './componets/list/list.component';

const routes: Routes = [
  {
    path: 'shop-list',
    component: ListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopListRoutingModule { }