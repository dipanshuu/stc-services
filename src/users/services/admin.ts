import { HttpService, Inject, Injectable } from '@nestjs/common';
import { USER } from '../constants';
import { UserRepositoryContract } from '../repositories/contract';

@Injectable()
export class AdminUsersService {
  constructor(
    @Inject(USER.REPOSITORY) private users: UserRepositoryContract,
    private http: HttpService,
  ) {}
}
