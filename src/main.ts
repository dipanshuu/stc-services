import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app';
import { useContainer } from 'class-validator';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { RequestGuard, ExceptionFilter, TimeoutInterceptor } from '@libs/core';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  console.time('SERVER_START_TIME');
  const app = await NestFactory.create(AppModule);

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  // middlewares, express specific
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.use(helmet());
  app.use(rateLimit({ windowMs: 60, max: 50 }));

  // guards
  app.useGlobalGuards(new RequestGuard());

  // filters
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new ExceptionFilter(httpAdapter));

  // interceptors
  app.useGlobalInterceptors(new TimeoutInterceptor());

  const config = app.get(ConfigService);
  await app.listen(config.get('app.port'));
  console.timeEnd('SERVER_START_TIME');
  console.log(
    `Application successfully started on port: ${config.get('app.port')}`,
  );
}

bootstrap();
