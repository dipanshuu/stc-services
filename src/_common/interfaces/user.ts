import { ObjectionModel } from '@libs/core';

export interface User$Model extends ObjectionModel {
  id?: number;
  uuid?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
