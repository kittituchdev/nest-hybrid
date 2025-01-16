import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const expressApp = require('../../server-express/server');

  // Create or import the Express app
  app.use('/express', expressApp)
  app.setGlobalPrefix('/nest');

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
