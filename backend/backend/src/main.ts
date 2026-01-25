import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// After you create app = NestFactory.create(AppModule)

const config = new DocumentBuilder()
  .setTitle('PropelX API')
  .setDescription('Fleet Management Platform API')
  .setVersion('1.0')
  .addBearerAuth()
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api/docs', app, document);
