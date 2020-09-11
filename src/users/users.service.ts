import { Injectable } from '@nestjs/common';
import { IUser } from 'types/users/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>
  ) {}
  async findAll() {
    return await this.userModel.find().exec()
  }

  async create(user: IUser) {
    const newUser = new this.userModel(user)
    return await newUser.save()
  }
}
