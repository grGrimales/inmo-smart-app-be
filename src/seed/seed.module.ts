import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';

@Module({
  controllers: [SeedController],
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema}]),
  ],
  providers: [SeedService, UserService],
})
export class SeedModule {}
