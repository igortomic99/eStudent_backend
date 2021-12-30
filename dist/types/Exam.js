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
exports.Exam = void 0;
const type_graphql_1 = require("type-graphql");
const ExaminationPeriod_1 = require("./ExaminationPeriod");
const ExamRecord_1 = require("./ExamRecord");
const Subject_1 = require("./Subject");
let Exam = class Exam {
};
__decorate([
    (0, type_graphql_1.Field)(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], Exam.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], Exam.prototype, "date", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => Subject_1.Subject, {
        nullable: false
    }),
    __metadata("design:type", Subject_1.Subject)
], Exam.prototype, "subject", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], Exam.prototype, "subjectID", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => ExaminationPeriod_1.ExaminationPeriod, {
        nullable: true
    }),
    __metadata("design:type", Object)
], Exam.prototype, "examinationPeriod", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], Exam.prototype, "exPeriodID", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => ExamRecord_1.ExamRecord, {
        nullable: true
    }),
    __metadata("design:type", Object)
], Exam.prototype, "examRecord", void 0);
Exam = __decorate([
    (0, type_graphql_1.ObjectType)()
], Exam);
exports.Exam = Exam;
//# sourceMappingURL=Exam.js.map