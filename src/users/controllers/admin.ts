import { RestController } from '@libs/core';
import { Controller } from '@nestjs/common';
import { AdminUsersService } from '../services/admin';

@Controller('admin/users')
export class AdminUsersController extends RestController {
  constructor(private readonly service: AdminUsersService) {
    super();
  }
}
