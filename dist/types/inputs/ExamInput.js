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
exports.ExamInput = void 0;
const type_graphql_1 = require("type-graphql");
let ExamInput = class ExamInput {
};
__decorate([
    (0, type_graphql_1.Field)(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], ExamInput.prototype, "date", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], ExamInput.prototype, "subjectID", void 0);
__decorate([
    (0, type_graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ExamInput.prototype, "exPeriodID", void 0);
ExamInput = __decorate([
    (0, type_graphql_1.InputType)()
], ExamInput);
exports.ExamInput = ExamInput;
//# sourceMappingURL=ExamInput.js.map