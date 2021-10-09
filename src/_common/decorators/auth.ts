import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../guards/jwt';

export function Auth(role: string) {
  SetMetadata('role', role);
  return applyDecorators(UseGuards(JwtGuard));
}
