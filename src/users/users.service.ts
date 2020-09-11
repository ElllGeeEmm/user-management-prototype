import { Injectable } from '@nestjs/common';
import { IUser } from 'types/users/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async create(user: IUser) {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  async read() {
    return await this.userModel.find().exec();
  }

  async readOne(id: string) {
    return await this.userModel.findById(id).exec();
  }

  async update(id: string, userUpdate: IUser) {
    const user = await this.userModel.findById(id).exec();
    user.set(userUpdate);
    return await user.save();
  }

  async delete(id: string) {
    const user = await this.userModel.findById(id).exec();
    return await user.remove();
  }
}
