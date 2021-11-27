import { HttpModule, Module } from '@nestjs/common';
import { CLASS, COMPANY } from './constants';
import { ClassController, CompaniesController } from './controllers';
import { ClassRepository } from './repositories.ts/classes/database';
import { CompanyRepository } from './repositories.ts/companies/database';
import { ClassService } from './services/classes';
import { CompanyService } from './services/companies';

@Module({
  imports: [HttpModule],
  controllers: [CompaniesController, ClassController],
  providers: [
    CompanyService,
    ClassService,
    { provide: COMPANY.REPOSITORY, useClass: CompanyRepository },
    { provide: CLASS.REPOSITORY, useClass: ClassRepository },
  ],
})
export class CompaniesModule {}
