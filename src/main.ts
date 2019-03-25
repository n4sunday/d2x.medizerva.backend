import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder} from '@nestjs/swagger'
import * as cors from 'cors'
import * as bodyParser  from 'body-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
  app.use(allowCrossDomain,cors())
  app.use(bodyParser.json())

  const options = new DocumentBuilder()
    .setTitle('API')
    .setDescription('T-D2X')
    .setVersion('1.0')
    .addTag('tags')
    .build()
  const document = SwaggerModule.createDocument(app,options)
  SwaggerModule.setup('docs',app,document)
	//await app.listen(process.env.PORT || 3001);
  await app.listen(5000);
}
bootstrap();
