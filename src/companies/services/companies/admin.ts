import { COMPANY } from '@app/companies/constants';
import { CompanyRepositoryContract } from '@app/companies/repositories.ts/companies/contract';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AdminCompanyService {
  @Inject(COMPANY.REPOSITORY)
  private readonly company: CompanyRepositoryContract;
}
