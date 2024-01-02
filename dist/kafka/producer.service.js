"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProducerService = void 0;
const common_1 = require("@nestjs/common");
const kafkajs_1 = require("kafkajs");
let ProducerService = class ProducerService {
    constructor() {
        this.kafka = new kafkajs_1.Kafka({
            brokers: ['localhost:9092'],
        });
        this.producer = this.kafka.producer({ createPartitioner: kafkajs_1.Partitioners.LegacyPartitioner });
    }
    async onModuleInit() {
        await this.producer.connect();
    }
    async produce(record) {
        await this.producer.send(record);
    }
    async onApplicationShutdown() {
        await this.producer.disconnect();
    }
};
exports.ProducerService = ProducerService;
exports.ProducerService = ProducerService = __decorate([
    (0, common_1.Injectable)()
], ProducerService);
//# sourceMappingURL=producer.service.js.map