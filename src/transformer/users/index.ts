import { Transformer } from '@libs/core';

export class UserDetailTransformer extends Transformer {
  async transform(user: Record<string, any>): Promise<Record<string, any>> {
    return {
      id: user.uuid,
      firstName: user.firstName,
      lastName: user.lastName,
    };
  }
}
