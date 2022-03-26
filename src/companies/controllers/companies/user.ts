import { CompanyService } from '../../services/companies';
import { RestController, Response, Request } from '@libs/core';
import { Controller, Get, Req, Res } from '@nestjs/common';

@Controller('companies')
export class CompaniesController extends RestController {
  constructor(private service: CompanyService) {
    super();
  }

  @Get()
  async get(@Res() res: Response, @Req() req: Request): Promise<Response> {
    const serviceResponse = await this.service.get(req.all());
    return res.success(serviceResponse);
  }
}
