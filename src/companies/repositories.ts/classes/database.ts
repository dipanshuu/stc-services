import { ClassModel } from '../../models';
import { Injectable } from '@nestjs/common';
import { DatabaseRepository as DB, InjectModel } from '@libs/core';
import { ClassRepositoryContract } from './contract';
import { Class$Model } from '@app/_common';

@Injectable()
export class ClassRepository
  extends DB<Class$Model>
  implements ClassRepositoryContract
{
  @InjectModel(ClassModel)
  model: ClassModel;
}
