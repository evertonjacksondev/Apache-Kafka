import { Controller, Get } from '@nestjs/common';
import { KafkaService } from './kafka.service';

@Controller('kafka')
export class KafkaController {
    constructor(private readonly kafkaService: KafkaService) { }

    @Get()
    getHello() {

        return this.kafkaService.getHello()
    }
}
