import { ObjectionModel } from '@libs/core';

export interface Auth$Model extends ObjectionModel {
  email?: string;
  password?: string;
}
