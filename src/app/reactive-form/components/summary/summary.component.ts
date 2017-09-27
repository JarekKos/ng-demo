import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/UserService';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  user: UserModel;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

}
