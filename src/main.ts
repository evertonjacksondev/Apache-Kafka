import { NestFactory } from '@nestjs/core';
import { KafkaModule } from './kafka/kafka.module';

async function bootstrap() {
  const app = await NestFactory.create(KafkaModule);
  await app.listen(3000);
}
bootstrap();
