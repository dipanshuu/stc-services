import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  jwtSecret: process.env.JWT_SECRET,
}));
