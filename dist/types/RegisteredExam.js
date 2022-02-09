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
exports.RegisteredExam = void 0;
const type_graphql_1 = require("type-graphql");
const Student_1 = require("./Student");
const Subject_1 = require("./Subject");
let RegisteredExam = class RegisteredExam {
};
__decorate([
    (0, type_graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RegisteredExam.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => Subject_1.Subject, {
        nullable: false,
    }),
    __metadata("design:type", Subject_1.Subject)
], RegisteredExam.prototype, "subject", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RegisteredExam.prototype, "subjectID", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => Student_1.Student, {
        nullable: false,
    }),
    __metadata("design:type", Student_1.Student)
], RegisteredExam.prototype, "student", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], RegisteredExam.prototype, "studentID", void 0);
RegisteredExam = __decorate([
    (0, type_graphql_1.ObjectType)()
], RegisteredExam);
exports.RegisteredExam = RegisteredExam;
//# sourceMappingURL=RegisteredExam.js.map