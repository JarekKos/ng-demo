import { Component } from '@angular/core';
import {UserService} from './shop-list/services/userService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loggedIn = false;

  constructor(private userService: UserService) {}

  logIn() {
    this.userService.logIn().subscribe(() => {
      this.loggedIn = this.userService.isLogged();
    });
  }

  logOut() {
    this.userService.logOut();
    this.loggedIn = false;
  }
}
