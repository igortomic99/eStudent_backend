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
exports.ExamRecord = void 0;
const type_graphql_1 = require("type-graphql");
const Exam_1 = require("./Exam");
const Grade_1 = require("./Grade");
const Student_1 = require("./Student");
let ExamRecord = class ExamRecord {
};
__decorate([
    (0, type_graphql_1.Field)(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], ExamRecord.prototype, "examId", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], ExamRecord.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => type_graphql_1.Float, {
        nullable: false
    }),
    __metadata("design:type", Number)
], ExamRecord.prototype, "points", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], ExamRecord.prototype, "passed", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => Grade_1.Grade, {
        nullable: false
    }),
    __metadata("design:type", Object)
], ExamRecord.prototype, "grade", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ExamRecord.prototype, "gradeID", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => Exam_1.Exam, {
        nullable: false
    }),
    __metadata("design:type", Object)
], ExamRecord.prototype, "exam", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ExamRecord.prototype, "examID", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => Student_1.Student, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ExamRecord.prototype, "student", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ExamRecord.prototype, "studentID", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], ExamRecord.prototype, "singed", void 0);
ExamRecord = __decorate([
    (0, type_graphql_1.ObjectType)()
], ExamRecord);
exports.ExamRecord = ExamRecord;
//# sourceMappingURL=ExamRecord.js.map