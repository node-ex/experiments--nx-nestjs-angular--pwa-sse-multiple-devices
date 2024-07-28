import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import path from 'path';
import type { Response } from 'express';

import { HealthcheckController } from './healthcheck.controller';

@Module({
  imports: [
    // https://docs.nestjs.com/recipes/serve-static
    // https://github.com/nestjs/serve-static
    // https://github.com/nestjs/serve-static/blob/master/lib/interfaces/serve-static-options.interface.ts
    ServeStaticModule.forRoot({
      rootPath: path.join(
        process.cwd(),
        'dist',
        'apps',
        'app-angular-1',
        'browser',
      ),
      serveStaticOptions: {
        setHeaders: (res: Response, url) => {
          res.set({ 'X-Custom-Header': 'some-value' });
        },
      },
    }),
  ],
  controllers: [HealthcheckController],
  providers: [],
})
export class AppModule {}
