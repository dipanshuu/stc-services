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
}
