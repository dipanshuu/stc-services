import { HttpModule, Module } from '@nestjs/common';
import { USER } from './constants';
import { UsersController } from './controllers';
import { UserRepository } from './repositories/database';
import { UsersService } from './services';

@Module({
  imports: [HttpModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    { provide: USER.REPOSITORY, useClass: UserRepository },
  ],
})
export class UsersModule {}
