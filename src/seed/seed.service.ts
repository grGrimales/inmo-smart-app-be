import { Injectable } from '@nestjs/common';
import { CreateSeedDto } from './dto/create-seed.dto';
import { UpdateSeedDto } from './dto/update-seed.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../user/entities/user.entity';
import mongoose, { Model } from 'mongoose';
import { UserService } from '../user/user.service';


@Injectable()
export class SeedService {

  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,


    private readonly userService: UserService,
  ) { }

  async create() {







    // Delete all users
    await this.userModel.deleteMany({}).exec();

    // Create new users
    const users = [
      {
        "email": "admin@gmail.com",
        "password": "123456",
        "name": "Admin",
        "userName": "super admin",
        "fullName": "Admin Full Name",
        "roles": ["ADMIN_ROLE"]
      },
      {
        "email": "user@gmail.com",
        "password": "123456",
        "name": "User",
        "userName": "user",
        "fullName": "User Full Name"
      },
    ]

    // create promises array
    const usersPromises = users.map(async (user) => {
      return await this.userService.register(user);
    });

    // execute promises

    let user: any[];
    await Promise.all(usersPromises).then((values) => {
      user = values;
    });






    return {
      message: 'Seed created',
      user
    };

  }


}
