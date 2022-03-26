import { BaseModel } from '@libs/core';
import { Model } from 'objection';

export class ReportModel extends BaseModel {
  static tableName = 'companydatadivided';

  static get relationMappings() {
    return {
      company: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '../../../companies/models/companies',
        join: {
          from: 'companydatadivided.companyID',
          to: 'company.companyID',
        },
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '../../../users/models/users',
        join: {
          from: 'companydatadivided.companyReportAddedBy',
          to: 'users.userID',
        },
      },
    };
  }
}
