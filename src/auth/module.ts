import { USER } from '@app/users/constants';
import { UserRepository } from '@app/users/repositories/database';
import { HttpModule, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './controllers';
import { AuthService } from './services';
import { KietStrategy } from './stratagies/kiet';
import { LocalStrategy } from './stratagies/local';

@Module({
  imports: [
    HttpModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    KietStrategy,
    LocalStrategy,
    { provide: USER.REPOSITORY, useClass: UserRepository },
  ],
})
export class AuthModule {}
