import { USER } from '@app/users/constants';
import { UserRepositoryContract } from '@app/users/repositories/contract';
import { Inject, Injectable } from '@nestjs/common';
import { KietStrategy } from '../stratagies/kiet';

@Injectable()
export class AuthService {
  constructor(
    @Inject(USER.REPOSITORY) private readonly users: UserRepositoryContract,
    private readonly kiet: KietStrategy,
  ) {}

  async login(inputs: Record<string, any>): Promise<Record<string, any>> {
    return;
  }
}
