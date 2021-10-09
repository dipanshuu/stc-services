import { USER } from '@app/users/constants';
import { UserRepository } from '@app/users/repositories/database';
import { HttpModule, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AdminAuthController, AuthController } from './controllers';
import { AdminAuthService, AuthService } from './services';
import { KietStrategy } from './stratagies/kiet';

@Module({
  imports: [
    HttpModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [AuthController, AdminAuthController],
  providers: [
    AuthService,
    AdminAuthService,
    KietStrategy,
    { provide: USER.REPOSITORY, useClass: UserRepository },
  ],
})
export class AuthModule {}
