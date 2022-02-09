"use strict";
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
require("reflect-metadata");
const client_1 = require("@prisma/client");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const type_graphql_1 = require("type-graphql");
const student_1 = require("./resolvers/student");
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const ioredis_1 = __importDefault(require("ioredis"));
const apollo_server_core_1 = require("apollo-server-core");
const professor_1 = require("./resolvers/professor");
const subject_1 = require("./resolvers/subject");
const grade_1 = require("./resolvers/grade");
const exam_1 = require("./resolvers/exam");
const express_session_1 = __importDefault(require("express-session"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const constants_1 = require("./constants");
const modul_1 = require("./resolvers/modul");
const class_1 = require("./resolvers/class");
const examinationPeriod_1 = require("./resolvers/examinationPeriod");
const prisma = new client_1.PrismaClient();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)();
    const schema = yield (0, type_graphql_1.buildSchema)({
        resolvers: [
            student_1.StudentResolver,
            professor_1.ProfessorResolver,
            subject_1.SubjectResolver,
            grade_1.GradeResolver,
            exam_1.ExamResolver,
            modul_1.ModulResolver,
            class_1.ClassResolver,
            examinationPeriod_1.ExaminationPeriodResolver,
        ],
        validate: false,
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema,
        introspection: true,
        plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)()],
        context: ({ req, res }) => ({
            req,
            res,
        }),
    });
    const httpServer = http_1.default.createServer(app);
    app.use((0, cors_1.default)({
        origin: "http://localhost:3000",
        credentials: true,
    }));
    const RedisStore = (0, connect_redis_1.default)(express_session_1.default);
    const redis = new ioredis_1.default();
    app.use((0, express_session_1.default)({
        name: constants_1.COOKIE_NAME,
        store: new RedisStore({
            client: redis,
            disableTouch: true,
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365,
            httpOnly: true,
            sameSite: "lax",
            secure: constants_1.__prod__,
        },
        saveUninitialized: false,
        secret: "rewrqwerqewrqwrqvvsdabhdfer",
        resave: false,
    }));
    yield apolloServer.start();
    apolloServer.applyMiddleware({
        app,
        cors: false,
    });
    httpServer.listen(4000, () => {
        console.log("Server started on http://localhost:4000/");
    });
});
main()
    .catch((err) => {
    console.log("Error: ", err);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
//# sourceMappingURL=index.js.map