import { BaseModel } from '@libs/core';
import { Model } from 'objection';

export class CompanyModel extends BaseModel {
  static tableName = 'company';

  static get relationMappings() {
    return {
      class: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/classes',
        join: {
          from: 'company.companyClass',
          to: 'class.classID',
        },
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '../../../users/models/users',
        join: {
          from: 'company.companyAddedBy',
          to: 'users.userID',
        },
      },
    };
  }
}
