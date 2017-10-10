import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class UserService {
  private loggedIn = false;

  isLogged() {
    return this.loggedIn;
  }

  logIn() {
    return Observable.of(true).delay(1000).do(val => this.loggedIn = true);
  }

  logOut() {
    this.loggedIn = false;
  }
}
