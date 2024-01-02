import { ProducerService } from './kafka/producer.service';
export declare class KafkaService {
    private readonly producerService;
    constructor(producerService: ProducerService);
    getHello(): Promise<string>;
}
