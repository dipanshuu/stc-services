import { RestController, Response, Request } from '@libs/core';
import { Controller, Get, Req, Res } from '@nestjs/common';
import { ReportService } from '../services';

@Controller('reports')
export class ReportsController extends RestController {
  constructor(private service: ReportService) {
    super();
  }

  @Get()
  async get(@Res() res: Response, @Req() req: Request): Promise<Response> {
    const serviceResponse = await this.service.get(req.all());
    return res.success(serviceResponse);
  }
}
