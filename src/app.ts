import { Module } from '@nestjs/common';
import { EventModule } from '@squareboat/nest-events';
import { DbModule } from './_db';
import { CoreModule } from '@libs/core';
import { ConsoleModule } from '@squareboat/nest-console';
import { UsersModule } from './users';
import { AuthModule } from './auth';
import { CompaniesModule } from './companies/module';
import { ReportsModule } from './reports';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    DbModule,
    CoreModule,
    EventModule,
    ConsoleModule,
    AuthModule,
    UsersModule,
    CompaniesModule,
    ReportsModule,
    DashboardModule,
  ],
  providers: [],
})
export class AppModule {}
