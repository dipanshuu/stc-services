import { CLASS } from '@app/companies/constants';
import { ClassRepositoryContract } from '@app/companies/repositories.ts/classes/contract';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ClassService {
  @Inject(CLASS.REPOSITORY)
  private readonly company: ClassRepositoryContract;
}
