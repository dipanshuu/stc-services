import { HttpModule, Module } from '@nestjs/common';
import { CLASS, COMPANY } from './constants';
import {
  AdminClassController,
  AdminCompaniesController,
  ClassController,
  CompaniesController,
} from './controllers';
import { ClassRepository } from './repositories.ts/classes/database';
import { CompanyRepository } from './repositories.ts/companies/database';
import { AdminClassService, ClassService } from './services/classes';
import { AdminCompanyService, CompanyService } from './services/companies';

@Module({
  imports: [HttpModule],
  controllers: [
    CompaniesController,
    AdminCompaniesController,
    ClassController,
    AdminClassController,
  ],
  providers: [
    CompanyService,
    AdminCompanyService,
    ClassService,
    AdminClassService,
    { provide: COMPANY.REPOSITORY, useClass: CompanyRepository },
    { provide: CLASS.REPOSITORY, useClass: ClassRepository },
  ],
})
export class CompaniesModule {}
