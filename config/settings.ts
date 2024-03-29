import { registerAs } from '@nestjs/config';

// all your application settings go here.
export default registerAs('settings', () => ({
  auth: {
    jwtSecret: process.env.JWT_SECRET,
    jwtLifetime: process.env.JWT_LIFETIME,
  },
}));
