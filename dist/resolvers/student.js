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
exports.StudentResolver = void 0;
const client_1 = require("@prisma/client");
const argon2_1 = __importDefault(require("argon2"));
const type_graphql_1 = require("type-graphql");
const isAuth_1 = require("../middleware/isAuth");
const ExamRecord_1 = require("../types/ExamRecord");
const StudentInput_1 = require("../types/inputs/StudentInput");
const Student_1 = require("../types/Student");
const prisma = new client_1.PrismaClient();
let StudentResolver = class StudentResolver {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const students = yield prisma.student.findMany();
            return students;
        });
    }
    createStudent(input) {
        return __awaiter(this, void 0, void 0, function* () {
            let student;
            const hashedPassword = yield argon2_1.default.hash(input.firstName.concat(input.lastName));
            const module = yield prisma.modul.findUnique({
                where: {
                    moduleName: input.moduleName,
                },
            });
            const klasa = yield prisma.class.findFirst({
                where: {
                    classLabel: input.classNumber,
                },
            });
            if (!module) {
                throw new Error("ER201");
            }
            if (!klasa) {
                throw new Error("ER301");
            }
            try {
                student = yield prisma.student.create({
                    data: {
                        email: input.email,
                        firstName: input.firstName,
                        password: hashedPassword,
                        lastName: input.lastName,
                        birthDate: input.birthDate,
                        brind: input.brind,
                        middleName: input.middleName,
                        jmbg: input.jmbg,
                        modulID: module.id,
                        classID: klasa.id,
                    },
                });
            }
            catch (err) {
                console.log(err.message);
                throw new Error("ER100");
            }
            return student;
        });
    }
    isLoggedIn({ req }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.session.studentID) {
                return true;
            }
            return false;
        });
    }
    registerExam(examID, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            let regexa;
            try {
                regexa = yield prisma.examRecord.create({
                    data: {
                        studentID: req.session.studentID,
                        singed: true,
                        examID,
                    },
                });
            }
            catch (err) {
                console.log(err);
                if (err)
                    return false;
            }
            return true;
        });
    }
    averageGrade({ req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const avg = yield prisma.grade.aggregate({
                _avg: {
                    value: true,
                },
                where: {
                    exam: {
                        exam: {
                            examRecord: {
                                studentID: req.session.studentID,
                                passed: true,
                                singed: false,
                            },
                        },
                    },
                },
            });
            if (!avg) {
                throw new Error("ER103");
            }
            return avg._avg.value;
        });
    }
    sumESPP({ req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const sum = yield prisma.subject.aggregate({
                _sum: {
                    espp: true,
                },
                where: {
                    exam: {
                        examRecord: {
                            studentID: req.session.studentID,
                            passed: true,
                            singed: false,
                        },
                    },
                },
            });
            if (!sum) {
                throw new Error("ER104");
            }
            return sum._sum.espp;
        });
    }
    login(brind, password, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = yield prisma.student.findUnique({
                where: {
                    brind: brind,
                },
            });
            if (!student) {
                throw new Error("ER001");
            }
            const valid = yield argon2_1.default.verify(student.password, password);
            if (!valid) {
                throw new Error("ER001");
            }
            req.session.studentID = student.id;
            return student;
        });
    }
    logout({ req, res }) {
        return new Promise((resolve) => {
            req.session.destroy((err) => {
                res.clearCookie("qid");
                if (err) {
                    resolve(false);
                    return;
                }
                resolve(true);
            });
        });
    }
    me({ req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const studentID = req.session.studentID;
            const student = yield prisma.student.findUnique({
                where: {
                    id: studentID,
                },
            });
            return student;
        });
    }
    studentsForModul(moduleName) {
        return __awaiter(this, void 0, void 0, function* () {
            const students = yield prisma.student.findMany({
                where: {
                    modul: {
                        moduleName,
                    },
                },
            });
            if (!students) {
                throw new Error("ER101");
            }
            return students;
        });
    }
    passedExams({ req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const exams = yield prisma.examRecord.findMany({
                select: {
                    exam: {
                        select: {
                            date: true,
                            examinationPeriod: {
                                select: {
                                    name: true,
                                },
                            },
                            subject: {
                                select: {
                                    subjectName: true,
                                    espp: true,
                                    type: true,
                                    professor: {
                                        select: {
                                            firstName: true,
                                            lastName: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                    grade: {
                        select: {
                            value: true,
                        },
                    },
                    passed: true,
                    points: true,
                },
                where: {
                    studentID: req.session.studentID,
                    passed: true,
                    singed: false,
                },
            });
            if (!exams) {
                throw new Error("ER105");
            }
            return exams;
        });
    }
    registeredExams({ req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const exams = yield prisma.examRecord.findMany({
                where: {
                    studentID: req.session.studentID,
                    singed: true,
                    passed: false,
                },
                select: {
                    id: true,
                    exam: {
                        select: {
                            date: true,
                            subject: {
                                select: {
                                    subjectName: true,
                                    type: true,
                                    espp: true,
                                    professor: {
                                        select: {
                                            firstName: true,
                                            lastName: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            });
            if (exams.length === 0) {
                throw new Error("You dont have any registered exams");
            }
            return exams;
        });
    }
    deregisterExam(examID, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            let regexa;
            const result = yield prisma.examRecord.findFirst({
                where: {
                    examID,
                    studentID: req.session.studentID,
                },
            });
            if (!result) {
                throw new Error("ER401");
            }
            try {
                regexa = yield prisma.examRecord.delete({
                    where: {
                        id: result === null || result === void 0 ? void 0 : result.id,
                    },
                });
            }
            catch (err) {
                console.log(err);
                if (err)
                    return false;
            }
            return true;
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Student_1.Student]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "getAll", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Student_1.Student),
    __param(0, (0, type_graphql_1.Arg)("input", () => StudentInput_1.StudentInput)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StudentInput_1.StudentInput]),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "createStudent", null);
__decorate([
    (0, type_graphql_1.Query)(() => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "isLoggedIn", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("examID", () => String)),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "registerExam", null);
__decorate([
    (0, type_graphql_1.Query)(() => type_graphql_1.Float),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "averageGrade", null);
__decorate([
    (0, type_graphql_1.Query)(() => type_graphql_1.Int),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "sumESPP", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Student_1.Student),
    __param(0, (0, type_graphql_1.Arg)("brind")),
    __param(1, (0, type_graphql_1.Arg)("password")),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "login", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StudentResolver.prototype, "logout", null);
__decorate([
    (0, type_graphql_1.Query)(() => Student_1.Student),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "me", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Student_1.Student]),
    __param(0, (0, type_graphql_1.Arg)("moduleName", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "studentsForModul", null);
__decorate([
    (0, type_graphql_1.Query)(() => [ExamRecord_1.ExamRecord]),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "passedExams", null);
__decorate([
    (0, type_graphql_1.Query)(() => [ExamRecord_1.ExamRecord]),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "registeredExams", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("examID", () => String)),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "deregisterExam", null);
StudentResolver = __decorate([
    (0, type_graphql_1.Resolver)(Student_1.Student)
], StudentResolver);
exports.StudentResolver = StudentResolver;
//# sourceMappingURL=student.js.map