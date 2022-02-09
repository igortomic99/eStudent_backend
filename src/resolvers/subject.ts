import { PrismaClient } from "@prisma/client";
import { SubjectInput } from "../types/inputs/SubjectInput";
import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Ctx,
  UseMiddleware,
} from "type-graphql";
import { Subject } from "../types/Subject";
import { MyContext } from "../context";
import { isAuth } from "../middleware/isAuth";

const prisma = new PrismaClient();

@Resolver(Subject)
export class SubjectResolver {
  @Query(() => [Subject])
  async getAllSubjects(): Promise<Subject[] | null> {
    return await prisma.subject.findMany();
  }

  @Mutation(() => Subject)
  async createSubject(@Arg("input", () => SubjectInput) input: SubjectInput) {
    let subject;
    try {
      subject = await prisma.subject.create({
        data: {
          subjectName: input.subjectName,
          espp: input.espp,
          type: input.type,
          professorID: input.professorID,
          modulID: input.modulID,
        },
      });
    } catch (err) {
      ///ADD ERR CODES
      console.log(err.message);
    }
    return subject;
  }

  @Query(() => [Subject])
  async subjectsForParticularModule(
    @Arg("moduleName", () => String) moduleName: string
  ): Promise<Subject[] | null> {
    return await prisma.subject.findMany({
      where: {
        modul: {
          moduleName,
        },
      },
    });
  }

  @Query(() => [Subject])
  @UseMiddleware(isAuth)
  async studentsSubjects(@Ctx() { req }: MyContext): Promise<Subject[]|null> {
    ///Find student with ID from session then search for subjects with modulID
    const student = await prisma.student.findUnique({
      where: {
        id: req.session.studentID,
      },
    });

    const subjects = await prisma.subject.findMany({
      where: {
        modulID: student?.modulID,
      },
    });
    ///Validate
    if (!subjects) {
      throw new Error("ER501");
    }
    return subjects;
  }
}
