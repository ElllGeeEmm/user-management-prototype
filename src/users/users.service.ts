import { Injectable } from '@nestjs/common';
import { User } from 'types/users/user.interface';

@Injectable()
export class UsersService {
  private readonly users = [];
  findAll() {
    return this.users
  }

  create(user: User) {
    this.users.push(user)
    return user
  }
}
