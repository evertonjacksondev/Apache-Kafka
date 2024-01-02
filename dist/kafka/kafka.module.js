"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaModule = void 0;
const common_1 = require("@nestjs/common");
const producer_service_1 = require("./producer.service");
const consumer_service_1 = require("./consumer.service");
const kafka_controller_1 = require("../kafka.controller");
const kafka_service_1 = require("../kafka.service");
const test_consumers_1 = require("../test.consumers");
let KafkaModule = class KafkaModule {
};
exports.KafkaModule = KafkaModule;
exports.KafkaModule = KafkaModule = __decorate([
    (0, common_1.Module)({
        providers: [producer_service_1.ProducerService, consumer_service_1.ConsumerService, kafka_service_1.KafkaService, test_consumers_1.TestConsumer],
        exports: [producer_service_1.ProducerService, consumer_service_1.ConsumerService],
        controllers: [kafka_controller_1.KafkaController]
    })
], KafkaModule);
//# sourceMappingURL=kafka.module.js.map