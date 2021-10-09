import { Inject, Injectable } from '@nestjs/common';
import { REPORT } from '../constants';
import { ReportRepositoryContract } from '../repositories/contract';

@Injectable()
export class AdminReportService {
  constructor(
    @Inject(REPORT.REPOSITORY)
    private readonly reports: ReportRepositoryContract,
  ) {}
}
