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
exports.Student = void 0;
const type_graphql_1 = require("type-graphql");
const Role_1 = require("./enums/Role");
const ExamRecord_1 = require("./ExamRecord");
let Student = class Student {
};
__decorate([
    (0, type_graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Student.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Student.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Student.prototype, "firstName", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Student.prototype, "middleName", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Student.prototype, "lastName", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Student.prototype, "jmbg", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Student.prototype, "brind", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Student.prototype, "birthDate", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => Role_1.Role, {
        nullable: false
    }),
    __metadata("design:type", String)
], Student.prototype, "role", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => String, {
        nullable: false
    }),
    __metadata("design:type", Object)
], Student.prototype, "class", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], Student.prototype, "classID", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], Student.prototype, "modulID", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => ExamRecord_1.ExamRecord, {
        nullable: false
    }),
    __metadata("design:type", Array)
], Student.prototype, "exams", void 0);
Student = __decorate([
    (0, type_graphql_1.ObjectType)()
], Student);
exports.Student = Student;
//# sourceMappingURL=Student.js.map