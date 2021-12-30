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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExaminationPeriodResolver = void 0;
const client_1 = require("@prisma/client");
const Exam_1 = require("../types/Exam");
const ExamInput_1 = require("../types/inputs/ExamInput");
const type_graphql_1 = require("type-graphql");
const isAuth_1 = require("../middleware/isAuth");
const ExaminationPeriod_1 = require("../types/ExaminationPeriod");
const ExaminationPeriodInput_1 = require("../types/inputs/ExaminationPeriodInput");
const prisma = new client_1.PrismaClient();
let ExaminationPeriodResolver = class ExaminationPeriodResolver {
    getAllEXP() {
        return __awaiter(this, void 0, void 0, function* () {
            const grades = yield prisma.examinationPeriod.findMany();
            return grades;
        });
    }
    createEXP(input) {
        return __awaiter(this, void 0, void 0, function* () {
            let exPeriod;
            try {
                exPeriod = yield prisma.examinationPeriod.create({
                    data: {
                        name: input.name,
                        beginningDate: input.beginningDate,
                        endDate: input.endDate,
                        modulID: input.modulID,
                    },
                });
            }
            catch (err) {
                console.log(err.message);
            }
            return exPeriod;
        });
    }
    examsFromExaminationPeriod({ req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = yield prisma.student.findUnique({
                where: {
                    id: req.session.studentID,
                },
            });
            if (!student) {
                throw new Error("There is no such student");
            }
            const dt = Date.now();
            const date = new Date(dt);
            const examinationPeriod = yield prisma.examinationPeriod.findFirst({
                where: {
                    modulID: student === null || student === void 0 ? void 0 : student.modulID,
                    beginningDate: {
                        gte: date,
                    },
                },
                select: {
                    exams: {
                        select: {
                            id: true,
                            date: true,
                            examRecord: {
                                select: {
                                    id: true,
                                    studentID: true,
                                    singed: true
                                }
                            },
                            subject: {
                                select: {
                                    espp: true,
                                    subjectName: true,
                                    type: true,
                                    professor: {
                                        select: {
                                            firstName: true,
                                            lastName: true
                                        }
                                    }
                                }
                            }
                        }
                    },
                    id: true,
                    name: true,
                    beginningDate: true,
                    endDate: true,
                }
            });
            if (!examinationPeriod) {
                throw new Error("There are no examination periods currently");
            }
            return examinationPeriod;
        });
    }
    addExam(input) {
        return __awaiter(this, void 0, void 0, function* () {
            let exam;
            try {
                exam = yield prisma.exam.create({
                    data: {
                        date: input.date,
                        exPeriodID: input.exPeriodID,
                        subjectID: input.subjectID,
                    },
                });
            }
            catch (err) {
                console.log(err.message);
            }
            return exam;
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [ExaminationPeriod_1.ExaminationPeriod]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExaminationPeriodResolver.prototype, "getAllEXP", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => ExaminationPeriod_1.ExaminationPeriod),
    __param(0, (0, type_graphql_1.Arg)("input", () => ExaminationPeriodInput_1.ExaminationPeriodInput)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ExaminationPeriodInput_1.ExaminationPeriodInput]),
    __metadata("design:returntype", Promise)
], ExaminationPeriodResolver.prototype, "createEXP", null);
__decorate([
    (0, type_graphql_1.Query)(() => ExaminationPeriod_1.ExaminationPeriod),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExaminationPeriodResolver.prototype, "examsFromExaminationPeriod", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Exam_1.Exam),
    __param(0, (0, type_graphql_1.Arg)("input", () => ExamInput_1.ExamInput)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ExamInput_1.ExamInput]),
    __metadata("design:returntype", Promise)
], ExaminationPeriodResolver.prototype, "addExam", null);
ExaminationPeriodResolver = __decorate([
    (0, type_graphql_1.Resolver)(ExaminationPeriod_1.ExaminationPeriod)
], ExaminationPeriodResolver);
exports.ExaminationPeriodResolver = ExaminationPeriodResolver;
//# sourceMappingURL=examinationPeriod.js.map