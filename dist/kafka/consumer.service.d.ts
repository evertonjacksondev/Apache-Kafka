import { OnApplicationShutdown } from "@nestjs/common";
import { ConsumerRunConfig, ConsumerSubscribeTopics } from "kafkajs";
export declare class ConsumerService implements OnApplicationShutdown {
    private readonly kafka;
    private readonly consumers;
    consume(topics: ConsumerSubscribeTopics, config: ConsumerRunConfig): Promise<void>;
    onApplicationShutdown(signal?: string): Promise<void>;
}
