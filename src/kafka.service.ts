import { Injectable } from '@nestjs/common';
import { ProducerService } from './kafka/producer.service';

@Injectable()
export class KafkaService {
    constructor(private readonly producerService: ProducerService) { }

    async getHello() {

        await this.producerService.produce({
            topic: 'test',
            messages: [{
                value: 'Hello Word'
            }]
        })
        return 'Message enviada'
    }
}
