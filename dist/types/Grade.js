"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grade = void 0;
const type_graphql_1 = require("type-graphql");
const ExamRecord_1 = require("./ExamRecord");
let Grade = class Grade {
};
__decorate([
    (0, type_graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Grade.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => type_graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Grade.prototype, "value", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => ExamRecord_1.ExamRecord, {
        nullable: false,
    }),
    __metadata("design:type", Object)
], Grade.prototype, "exam", void 0);
Grade = __decorate([
    (0, type_graphql_1.ObjectType)()
], Grade);
exports.Grade = Grade;
//# sourceMappingURL=Grade.js.map