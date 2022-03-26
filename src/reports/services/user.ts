import { Inject, Injectable } from '@nestjs/common';
import { parseInt } from 'lodash';
import { REPORT } from '../constants';
import { ReportRepositoryContract } from '../repositories/contract';

@Injectable()
export class ReportService {
  constructor(
    @Inject(REPORT.REPOSITORY)
    private readonly reports: ReportRepositoryContract,
  ) {}

  async get(inputs): Promise<Record<string, any>> {
    const data = this.reports.search({ companyId: parseInt(inputs.companyId) });
    return data;
  }
}
