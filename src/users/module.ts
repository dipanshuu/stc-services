import { HttpModule, Module } from '@nestjs/common';
import { USER } from './constants';
import { AdminUsersController, UsersController } from './controllers';
import { UserRepository } from './repositories/database';
import { AdminUsersService, UsersService } from './services';

@Module({
  imports: [HttpModule],
  controllers: [UsersController, AdminUsersController],
  providers: [
    UsersService,
    AdminUsersService,
    { provide: USER.REPOSITORY, useClass: UserRepository },
  ],
})
export class UsersModule {}
