import { Transformer } from '@libs/core';

export class AuthDetailTransformer extends Transformer {
  async transform(data: Record<string, any>): Promise<Record<string, any>> {
    return {
      token: data.token,
    };
  }
}
