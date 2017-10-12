import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {ShopList} from './shopList';

@Injectable()
export class ResolverService implements Resolve<any> {
  constructor(private shopList: ShopList) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.paramMap.get('id');
    return this.shopList.getItemById(id);
  }
}
