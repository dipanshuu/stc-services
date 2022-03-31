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

  async search(params: Record<string, any>): Promise<Record<string, any>> {
    const query = this.query();
    query.where('companydatadivided.companyID', '=', params.companyId);
    query.withGraphFetched({ company: true, user: true });
    return query;
  }
  async count(): Promise<any> {
    const query = this.query();
    query.count();
    return query;
  }
}
