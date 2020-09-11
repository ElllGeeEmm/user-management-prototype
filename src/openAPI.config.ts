import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const initSwagger = (app) => {
  const options = new DocumentBuilder()
    .setTitle('User management prototype')
    .build();

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)
}