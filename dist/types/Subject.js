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
exports.Subject = void 0;
const type_graphql_1 = require("type-graphql");
const SubjectType_1 = require("./enums/SubjectType");
const Modul_1 = require("./Modul");
const Professor_1 = require("./Professor");
const Exam_1 = require("./Exam");
let Subject = class Subject {
};
__decorate([
    (0, type_graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Subject.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Subject.prototype, "subjectName", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => type_graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Subject.prototype, "espp", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => Professor_1.Professor, {
        nullable: false,
    }),
    __metadata("design:type", Professor_1.Professor)
], Subject.prototype, "professor", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Subject.prototype, "professorID", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => Exam_1.Exam, {
        nullable: false,
    }),
    __metadata("design:type", Object)
], Subject.prototype, "exam", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => SubjectType_1.SubjectType, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Subject.prototype, "type", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => Modul_1.Modul, {
        nullable: false,
    }),
    __metadata("design:type", Modul_1.Modul)
], Subject.prototype, "modul", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], Subject.prototype, "modulID", void 0);
Subject = __decorate([
    (0, type_graphql_1.ObjectType)()
], Subject);
exports.Subject = Subject;
//# sourceMappingURL=Subject.js.map