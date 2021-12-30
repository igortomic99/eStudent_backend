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
exports.SubjectResolver = void 0;
const client_1 = require("@prisma/client");
const SubjectInput_1 = require("../types/inputs/SubjectInput");
const type_graphql_1 = require("type-graphql");
const Subject_1 = require("../types/Subject");
const isAuth_1 = require("../middleware/isAuth");
const prisma = new client_1.PrismaClient();
let SubjectResolver = class SubjectResolver {
    getAllSubjects() {
        return __awaiter(this, void 0, void 0, function* () {
            const subjects = yield prisma.subject.findMany();
            return subjects;
        });
    }
    createSubject(input) {
        return __awaiter(this, void 0, void 0, function* () {
            let subject;
            try {
                subject = yield prisma.subject.create({
                    data: {
                        subjectName: input.subjectName,
                        espp: input.espp,
                        type: input.type,
                        professorID: input.professorID,
                        modulID: input.modulID,
                    },
                });
            }
            catch (err) {
                console.log(err.message);
            }
            return subject;
        });
    }
    subjectsForParticularModule(moduleName) {
        return __awaiter(this, void 0, void 0, function* () {
            const subjects = yield prisma.subject.findMany({
                where: {
                    modul: {
                        moduleName,
                    },
                },
            });
            return subjects;
        });
    }
    studentsSubjects({ req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = yield prisma.student.findUnique({
                where: {
                    id: req.session.studentID
                }
            });
            const subjects = yield prisma.subject.findMany({
                where: {
                    modulID: student === null || student === void 0 ? void 0 : student.modulID
                }
            });
            return subjects;
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Subject_1.Subject]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SubjectResolver.prototype, "getAllSubjects", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Subject_1.Subject),
    __param(0, (0, type_graphql_1.Arg)("input", () => SubjectInput_1.SubjectInput)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SubjectInput_1.SubjectInput]),
    __metadata("design:returntype", Promise)
], SubjectResolver.prototype, "createSubject", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Subject_1.Subject]),
    __param(0, (0, type_graphql_1.Arg)("moduleName", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubjectResolver.prototype, "subjectsForParticularModule", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Subject_1.Subject]),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SubjectResolver.prototype, "studentsSubjects", null);
SubjectResolver = __decorate([
    (0, type_graphql_1.Resolver)(Subject_1.Subject)
], SubjectResolver);
exports.SubjectResolver = SubjectResolver;
//# sourceMappingURL=subject.js.map