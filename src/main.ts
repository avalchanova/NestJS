import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //automatically removes the non defined properties from our DTO for createUserDto
      forbidNonWhitelisted: true, // returns an error when there is a non defined prop
    })
  ); //this validates the user input when registering
  await app.listen(4000);
}
bootstrap();
