import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { StudentResolver } from "./resolvers/student";
import http from "http";
import cors from "cors";
import Redis from "ioredis";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ProfessorResolver } from "./resolvers/professor";
import { SubjectResolver } from "./resolvers/subject";
import { GradeResolver } from "./resolvers/grade";
import { ExamResolver } from "./resolvers/exam";
import session from "express-session";
import connectRedis from "connect-redis";
import { COOKIE_NAME, __prod__ } from "./constants";
import { ModulResolver } from "./resolvers/modul";
import { ClassResolver } from "./resolvers/class";
import { ExaminationPeriodResolver } from "./resolvers/examinationPeriod";

const prisma = new PrismaClient();

const main = async () => {
  const app = express();
  const schema = await buildSchema({
    resolvers: [
      StudentResolver,
      ProfessorResolver,
      SubjectResolver,
      GradeResolver,
      ExamResolver,
      ModulResolver,
      ClassResolver,
      ExaminationPeriodResolver,
    ],
    validate: false,
  });
  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    context: ({ req, res }) => ({
      req,
      res,
    }),
  });

  const httpServer = http.createServer(app);

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  const RedisStore = connectRedis(session);
  const redis = new Redis();

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365, //Change before prod to 30 minutes
        httpOnly: true,
        sameSite: "lax",
        secure: __prod__,
      },
      saveUninitialized: false,
      secret: "rewrqwerqewrqwrqvvsdabhdfer",
      resave: false,
    })
  );

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  httpServer.listen(4000, () => {
    console.log("Server started on http://localhost:4000/");
  });
};

main()
  .catch((err) => {
    console.log("Error: ", err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
