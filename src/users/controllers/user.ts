import { RestController } from '@libs/core';
import { Controller } from '@nestjs/common';
import { UsersService } from '../services/user';

@Controller('users')
export class UsersController extends RestController {
  constructor(private readonly service: UsersService) {
    super();
  }
}
