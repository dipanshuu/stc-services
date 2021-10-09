import { AuthDetailTransformer } from '@app/transformer/auth';
import { RestController, Request, Response } from '@libs/core';
import { Controller, Post, Req, Res } from '@nestjs/common';
import { AuthService } from '../services';

@Controller('auth')
export class AuthController extends RestController {
  constructor(private readonly service: AuthService) {
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
