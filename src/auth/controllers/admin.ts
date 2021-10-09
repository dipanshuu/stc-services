import { AuthDetailTransformer } from '@app/transformer/auth';
import { Request, Response, RestController } from '@libs/core';
import { Controller, Post, Req, Res } from '@nestjs/common';
import { AdminAuthService } from '../services';

@Controller('admin/auth')
export class AdminAuthController extends RestController {
  constructor(private readonly service: AdminAuthService) {
    super();
  }

  @Post()
  async login(@Req() req: Request, @Res() res: Response): Promise<Response> {
    const serviceResponse = await this.service.login(req.all());
    return res.success(
      await this.transform(serviceResponse, new AuthDetailTransformer(), {
        req,
      }),
    );
  }
}
