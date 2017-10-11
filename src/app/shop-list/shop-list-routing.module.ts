import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { ListComponent } from './componets/list/list.component';
import { EditComponent } from './componets/edit/edit.component';
import { AlertComponent } from './componets/alert/alert.component';
import { AuthGuard } from './services/authGuard';

const routes: Routes = [
  {
    path: 'shop-list',
    component: ListComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'edit/:id',
        component: EditComponent,
        canDeactivate: [AuthGuard]
      },
      {
        path: 'compose',
        component: AlertComponent,
        outlet: 'popup'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopListRoutingModule { }
