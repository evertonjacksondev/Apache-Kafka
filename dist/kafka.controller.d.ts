import { KafkaService } from './kafka.service';
export declare class KafkaController {
    private readonly kafkaService;
    constructor(kafkaService: KafkaService);
    getHello(): Promise<string>;
}
