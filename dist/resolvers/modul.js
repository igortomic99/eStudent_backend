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
exports.ModulResolver = void 0;
const client_1 = require("@prisma/client");
const ModulInput_1 = require("../types/inputs/ModulInput");
const Modul_1 = require("../types/Modul");
const type_graphql_1 = require("type-graphql");
const Subject_1 = require("../types/Subject");
const prisma = new client_1.PrismaClient();
let ModulResolver = class ModulResolver {
    getAllModuls() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.modul.findMany();
        });
    }
    createModul(input) {
        return __awaiter(this, void 0, void 0, function* () {
            let modul;
            try {
                modul = yield prisma.modul.create({
                    data: {
                        moduleCode: input.moduleCode,
                        moduleName: input.moduleName,
                    },
                });
            }
            catch (err) {
                console.log(err.message);
                throw new Error("Add err codes bro");
            }
            return modul;
        });
    }
    modulSubjects(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.subject.findMany({
                where: {
                    modulID: id,
                },
            });
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Modul_1.Modul]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModulResolver.prototype, "getAllModuls", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Modul_1.Modul),
    __param(0, (0, type_graphql_1.Arg)("input", () => ModulInput_1.ModulInput)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ModulInput_1.ModulInput]),
    __metadata("design:returntype", Promise)
], ModulResolver.prototype, "createModul", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Subject_1.Subject]),
    __param(0, (0, type_graphql_1.Arg)("id", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModulResolver.prototype, "modulSubjects", null);
ModulResolver = __decorate([
    (0, type_graphql_1.Resolver)(Modul_1.Modul)
], ModulResolver);
exports.ModulResolver = ModulResolver;
//# sourceMappingURL=modul.js.map