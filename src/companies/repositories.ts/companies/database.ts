import { CompanyModel } from '../../models';
import { Injectable } from '@nestjs/common';
import { DatabaseRepository as DB, InjectModel } from '@libs/core';
import { CompanyRepositoryContract } from './contract';
import { Company$Model } from '@app/_common';

@Injectable()
export class CompanyRepository
  extends DB<Company$Model>
  implements CompanyRepositoryContract
{
  @InjectModel(CompanyModel)
  model: CompanyModel;

  async search(params: Record<string, any>): Promise<Record<string, any>> {
    const query = this.query();
    query.where('companyClass', '=', params.classId);
    query.withGraphFetched({ user: true, class: true });
    return query;
  }
}
