import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class KietStrategy {
  constructor(private readonly http: HttpService) {}
}
