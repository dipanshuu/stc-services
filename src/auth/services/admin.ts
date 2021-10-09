import { USER } from '@app/users/constants';
import { UserRepositoryContract } from '@app/users/repositories/contract';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AdminAuthService {
  constructor(
    @Inject(USER.REPOSITORY) private readonly users: UserRepositoryContract,
  ) {}

  async login(inputs: Record<string, any>): Promise<Record<string, any>> {
    return;
  }
}
