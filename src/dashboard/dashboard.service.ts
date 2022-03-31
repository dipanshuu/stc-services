import { Inject, Injectable } from '@nestjs/common';
import { REPORT } from '@app/reports/constants';
import { ReportRepositoryContract } from '@app/reports/repositories/contract';

@Injectable()
export class DashboardService {
  constructor(
    @Inject(REPORT.REPOSITORY)
    private readonly reports: ReportRepositoryContract,
  ) {}
  async findAll() {
    const companydatadivided = await this.reports.count();
    return { companydatadivided };
  }
}
