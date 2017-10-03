import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { ListComponent } from './componets/list/list.component';
import { EditComponent } from './componets/edit/edit.component';

const routes: Routes = [
  {
    path: 'shop-list',
    component: ListComponent,
    children: [
      {
        path: 'edit/:id',
        component: EditComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopListRoutingModule { }
