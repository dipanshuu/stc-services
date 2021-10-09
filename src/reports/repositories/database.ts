import { ReportModel } from '../models';
import { Injectable } from '@nestjs/common';
import { DatabaseRepository as DB, InjectModel } from '@libs/core';
import { ReportRepositoryContract } from './contract';
import { Report$Model } from '@app/_common';

@Injectable()
export class ReportRepository
  extends DB<Report$Model>
  implements ReportRepositoryContract
{
  @InjectModel(ReportModel)
  model: ReportModel;
}
