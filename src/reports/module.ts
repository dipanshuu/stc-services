import { HttpModule, Module } from '@nestjs/common';
import { REPORT } from './constants';
import { AdminReportsController, ReportsController } from './controllers';
import { ReportRepository } from './repositories/database';
import { AdminReportService, ReportService } from './services';

@Module({
  imports: [HttpModule],
  controllers: [ReportsController, AdminReportsController],
  providers: [
    ReportService,
    AdminReportService,
    { provide: REPORT.REPOSITORY, useClass: ReportRepository },
  ],
})
export class ReportsModule {}
