import { Injectable } from "@nestjs/common";
import { Consumer, ConsumerRunConfig, ConsumerSubscribeTopics, Kafka } from "kafkajs";

@Injectable()
export class ConsumerService {

    private readonly kafka = new Kafka({
        brokers: ['localhost:9092'],
    })

    private readonly consumers: Consumer[] = []

    async consume(topic: ConsumerSubscribeTopics, config: ConsumerRunConfig) {

        const consumer = this.kafka.consumer({ groupId: 'nestjs-kafka' })
    }
}