import { Report$Model } from '@app/_common';
import { RepositoryContract } from '@libs/core';

export interface ReportRepositoryContract
  extends RepositoryContract<Report$Model> {
  search(params: Record<string, any>): Promise<Record<string, any>>;
  count(): Promise<any>;
}
