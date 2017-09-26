import { UserModel } from '../models/user.model';

export class UserService {
  private user: UserModel = null;

  getUser() {
    return this.user;
  }

  updateUser(dataObj) {
    this.user = Object.assign({}, this.user, dataObj);
  }
}
