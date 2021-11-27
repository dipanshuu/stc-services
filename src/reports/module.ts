import { HttpModule, Module } from '@nestjs/common';
import { REPORT } from './constants';
import { ReportsController } from './controllers';
import { ReportRepository } from './repositories/database';
import { ReportService } from './services';

@Module({
  imports: [HttpModule],
  controllers: [ReportsController],
  providers: [
    ReportService,
    { provide: REPORT.REPOSITORY, useClass: ReportRepository },
  ],
})
export class ReportsModule {}
