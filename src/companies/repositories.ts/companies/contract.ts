import { Company$Model } from '@app/_common';
import { RepositoryContract } from '@libs/core';

export interface CompanyRepositoryContract
  extends RepositoryContract<Company$Model> {
  search(params: Record<string, any>): Promise<Record<string, any>>;
}
