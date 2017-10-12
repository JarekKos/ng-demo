import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ShopListRoutingModule } from './shop-list-routing.module';
import { ListComponent } from './componets/list/list.component';
import { EditComponent } from './componets/edit/edit.component';
import { ShopList } from './services/shopList';
import { AlertComponent } from './componets/alert/alert.component';
import {AuthGuard} from './services/authGuard';
import {ResolverService} from './services/resolver.service';



@NgModule({
  imports: [
    CommonModule,
    ShopListRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ListComponent, EditComponent, AlertComponent],
  providers: [ShopList, AuthGuard, ResolverService]
})
export class ShopListModule { }
