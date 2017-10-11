import {Injectable} from '@angular/core';
import {CanActivate, CanDeactivate} from '@angular/router';
import {UserService} from './userService';
import {EditComponent} from '../componets/edit/edit.component';

@Injectable()
export class AuthGuard implements CanActivate, CanDeactivate<EditComponent> {

  constructor(private userService: UserService) {}

  canActivate() {
    return this.userService.isLogged();
  }

  canDeactivate(component: EditComponent) {
    if (component.canDeactivate()) {
      return true;
    }

    alert('You have to save changes or revert it');
    return false;
  }
}
