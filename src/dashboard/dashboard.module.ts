import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { REPORT } from '@app/reports/constants';
import { ReportRepository } from '@app/reports/repositories/database';

@Module({
  providers: [
    DashboardService,
    { provide: REPORT.REPOSITORY, useClass: ReportRepository },
  ],
  controllers: [DashboardController],
})
export class DashboardModule {}
