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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessorResolver = void 0;
const client_1 = require(".prisma/client");
const argon2_1 = __importDefault(require("argon2"));
const type_graphql_1 = require("type-graphql");
const isAuthP_1 = require("../middleware/isAuthP");
const Exam_1 = require("../types/Exam");
const ExamRecord_1 = require("../types/ExamRecord");
const ProfessorInput_1 = require("../types/inputs/ProfessorInput");
const Professor_1 = require("../types/Professor");
const prisma = new client_1.PrismaClient();
let ProfessorResolver = class ProfessorResolver {
    getAllProfessors() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.professor.findMany();
        });
    }
    createProfessor(input) {
        return __awaiter(this, void 0, void 0, function* () {
            let professor;
            const hashedPassword = yield argon2_1.default.hash(input.password);
            try {
                professor = yield prisma.professor.create({
                    data: {
                        firstName: input.firstName,
                        lastName: input.lastName,
                        email: input.email,
                        password: hashedPassword,
                        jmbg: input.jmbg,
                    },
                });
            }
            catch (err) {
                console.log(err.message);
                throw new Error("ObRaDi ErRor");
            }
            return professor;
        });
    }
    registerPassedExam(id, points) {
        return __awaiter(this, void 0, void 0, function* () {
            let grade = yield prisma.grade.findFirst({
                where: {
                    value: 5,
                },
            });
            if (points >= 51 && points < 61) {
                grade = yield prisma.grade.findFirst({
                    where: {
                        value: 6,
                    },
                });
            }
            else if (points >= 61 && points < 71) {
                grade = yield prisma.grade.findFirst({
                    where: {
                        value: 7,
                    },
                });
            }
            else if (points >= 71 && points < 81) {
                grade = yield prisma.grade.findFirst({
                    where: {
                        value: 8,
                    },
                });
            }
            else if (points >= 81 && points < 91) {
                grade = yield prisma.grade.findFirst({
                    where: {
                        value: 9,
                    },
                });
            }
            else if (points >= 91 && points <= 100) {
                grade = yield prisma.grade.findFirst({
                    where: {
                        value: 10,
                    },
                });
            }
            if (!grade) {
                throw new Error("Grades are not added into table");
            }
            const exam = yield prisma.examRecord.update({
                where: {
                    id,
                },
                data: {
                    gradeID: grade.id,
                    singed: false,
                    passed: true,
                    points,
                },
            });
            if (exam) {
                return true;
            }
            return false;
        });
    }
    loginProfessor(email, password, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const professor = yield prisma.professor.findUnique({
                where: {
                    email,
                },
            });
            if (!professor) {
                throw new Error("There is no such professor");
            }
            const valid = yield argon2_1.default.verify(professor.password, password);
            if (!valid) {
                throw new Error("Wrong credentials");
            }
            req.session.professorID = professor.id;
            return professor;
        });
    }
    meProfessor({ req }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.professor.findUnique({
                where: {
                    id: req.session.professorID,
                },
            });
        });
    }
    examsFromCurrentExamPeriod({ req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const dt = Date.now();
            const date = new Date(dt);
            const exams = yield prisma.exam.findMany({
                where: {
                    subject: {
                        professorID: req.session.professorID,
                    },
                    examinationPeriod: {
                        beginningDate: {
                            gte: date,
                        },
                    },
                },
                select: {
                    date: true,
                    subject: {
                        select: {
                            id: true,
                            espp: true,
                            subjectName: true,
                            type: true,
                        },
                    },
                    examRecord: {
                        select: {
                            student: {
                                select: {
                                    firstName: true,
                                    lastName: true,
                                    brind: true,
                                },
                            },
                        },
                    },
                },
            });
            return exams;
        });
    }
    studentsWhoSingedExam({ req }, subjectID) {
        return __awaiter(this, void 0, void 0, function* () {
            const dt = Date.now();
            const date = new Date(dt);
            return yield prisma.examRecord.findMany({
                where: {
                    exam: {
                        subject: {
                            id: subjectID,
                            professorID: req.session.professorID,
                        },
                        date: {
                            gte: date,
                        },
                    },
                    singed: true,
                },
                include: {
                    exam: {
                        include: {
                            subject: true,
                        },
                    },
                    student: true,
                },
            });
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Professor_1.Professor]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProfessorResolver.prototype, "getAllProfessors", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Professor_1.Professor),
    __param(0, (0, type_graphql_1.Arg)("input", () => ProfessorInput_1.ProfessorInput)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProfessorInput_1.ProfessorInput]),
    __metadata("design:returntype", Promise)
], ProfessorResolver.prototype, "createProfessor", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id", () => String)),
    __param(1, (0, type_graphql_1.Arg)("points", () => type_graphql_1.Float)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], ProfessorResolver.prototype, "registerPassedExam", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Professor_1.Professor),
    __param(0, (0, type_graphql_1.Arg)("email")),
    __param(1, (0, type_graphql_1.Arg)("password")),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], ProfessorResolver.prototype, "loginProfessor", null);
__decorate([
    (0, type_graphql_1.Query)(() => Professor_1.Professor),
    (0, type_graphql_1.UseMiddleware)(isAuthP_1.isAuthP),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfessorResolver.prototype, "meProfessor", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Exam_1.Exam]),
    (0, type_graphql_1.UseMiddleware)(isAuthP_1.isAuthP),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfessorResolver.prototype, "examsFromCurrentExamPeriod", null);
__decorate([
    (0, type_graphql_1.Query)(() => [ExamRecord_1.ExamRecord]),
    (0, type_graphql_1.UseMiddleware)(isAuthP_1.isAuthP),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("subjectID", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProfessorResolver.prototype, "studentsWhoSingedExam", null);
ProfessorResolver = __decorate([
    (0, type_graphql_1.Resolver)(Professor_1.Professor)
], ProfessorResolver);
exports.ProfessorResolver = ProfessorResolver;
//# sourceMappingURL=professor.js.map