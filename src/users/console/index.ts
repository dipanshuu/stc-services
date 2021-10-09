import { Utils } from '@app/_common/utils';
import { uuid } from '@libs/core';
import { Inject, Injectable } from '@nestjs/common';
import { Command, _cli } from '@squareboat/nest-console';
import { exit } from 'process';
import { USER } from '../constants';
import { UserRepositoryContract } from '../repositories/contract';

@Injectable()
@Command('create:root', { desc: 'Command to create a root user' })
export class GreetUser {
  constructor(@Inject(USER.REPOSITORY) private users: UserRepositoryContract) {}

  public async handle(): Promise<void> {
    const rootEmail = 'stckiet@gmail.com';

    const exists = await this.users.exists({ email: rootEmail });

    if (exists) {
      _cli.error('Root user already exists');
      exit(0);
    }

    const password = await _cli.password('Enter password: ');
    const confirmPassword = await _cli.password('Confirm password: ');

    if (password !== confirmPassword) {
      _cli.error('Passwords do not match');
      exit(0);
    }

    await this.users.create({
      uuid: uuid(),
      firstName: 'STC',
      lastName: 'Admin',
      email: rootEmail,
      password: await Utils.hashPassword(password),
    });

    _cli.success(`Root user created: ${rootEmail}`);
    return;
  }
}
