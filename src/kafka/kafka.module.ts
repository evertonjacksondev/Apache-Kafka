import { Module } from '@nestjs/common';
import { ProducerService } from './producer.service';
import { ConsumerService } from './consumer.service';
import { KafkaController } from '../kafka.controller';
import { KafkaService } from '../kafka.service';
import { TestConsumer } from 'src/test.consumers';

@Module({
    providers: [ProducerService, ConsumerService, KafkaService, TestConsumer],
    exports: [ProducerService, ConsumerService],
    controllers: [KafkaController]
})
export class KafkaModule { }
