import { COMPANY } from '@app/companies/constants';
import { CompanyRepositoryContract } from '@app/companies/repositories.ts/companies/contract';
import { Inject, Injectable } from '@nestjs/common';
import { parseInt } from 'lodash';

@Injectable()
export class CompanyService {
  @Inject(COMPANY.REPOSITORY)
  private readonly company: CompanyRepositoryContract;

  async get(inputs): Promise<Record<string, any>> {
    const data = this.company.search({ classId: parseInt(inputs.classId) });
    return data;
  }
}
