import { PrismaClient } from ".prisma/client";
import argon2 from "argon2";
import {
  Arg,
  Ctx,
  Float,
  Mutation,
  Query,
  Resolver,
  UseMiddleware
} from "type-graphql";
import { MyContext } from "../context";
import { isAuthP } from "../middleware/isAuthP";
import { Exam } from "../types/Exam";
import { ExamRecord } from "../types/ExamRecord";
import { ProfessorInput } from "../types/inputs/ProfessorInput";
import { Professor } from "../types/Professor";

const prisma = new PrismaClient();

@Resolver(Professor)
export class ProfessorResolver {
  @Query(() => [Professor])
  async getAllProfessors(): Promise<Professor[] | null> {
    return await prisma.professor.findMany();
  }

  @Mutation(() => Professor)
  async createProfessor(
    @Arg("input", () => ProfessorInput) input: ProfessorInput
  ): Promise<Professor | null> {
    let professor;
    const hashedPassword = await argon2.hash(input.password);
    try {
      professor = await prisma.professor.create({
        data: {
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
          password: hashedPassword,
          jmbg: input.jmbg,
        },
      });
    } catch (err) {
      ///ADD ERRRR CODESS BRAH
      console.log(err.message);
      throw new Error("ObRaDi ErRor");
    }
    return professor;
  }

  @Mutation(() => Boolean)
  async registerPassedExam(
    @Arg("id", () => String) id: string,
    @Arg("points", () => Float) points: number
  ): Promise<Boolean> {
    ///Finding grade based on value
    let grade = await prisma.grade.findFirst({
      where: {
        value: 5,
      },
    });
    if (points >= 51 && points < 61) {
      grade = await prisma.grade.findFirst({
        where: {
          value: 6,
        },
      });
    } else if (points >= 61 && points < 71) {
      grade = await prisma.grade.findFirst({
        where: {
          value: 7,
        },
      });
    } else if (points >= 71 && points < 81) {
      grade = await prisma.grade.findFirst({
        where: {
          value: 8,
        },
      });
    } else if (points >= 81 && points < 91) {
      grade = await prisma.grade.findFirst({
        where: {
          value: 9,
        },
      });
    } else if (points >= 91 && points <= 100) {
      grade = await prisma.grade.findFirst({
        where: {
          value: 10,
        },
      });
    }
    if (!grade) {
      ////ADD err codes brah
      throw new Error("Grades are not added into table");
    }
    const exam = await prisma.examRecord.update({
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
    ///Add err codes brah
    if (exam) {
      return true;
    }
    return false;
  }

  @Mutation(() => Professor)
  async loginProfessor(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() { req }: MyContext
  ): Promise<Professor | null> {

    ///Finding professor based on unique field
    const professor = await prisma.professor.findUnique({
      where: {
        email,
      },
    });
    ///ADD ERRRR CODESS BRAH
    if (!professor) {
      throw new Error("There is no such professor");
    }
    ///Verify
    const valid = await argon2.verify(professor.password, password);
    if (!valid) {
      throw new Error("Wrong credentials");
    }
    ///Add professorId in session
    req.session!.professorID = professor.id;
    return professor;
  }

  @Query(() => Professor)
  @UseMiddleware(isAuthP)
  async meProfessor(@Ctx() { req }: MyContext): Promise<Professor | null> {
    return await prisma.professor.findUnique({
      where: {
        id: req.session.professorID,
      },
    });
  }

  @Query(() => [Exam])
  @UseMiddleware(isAuthP)
  async examsFromCurrentExamPeriod(@Ctx() { req }: MyContext) {
    ///Getting Exams from current examination period
    const dt = Date.now();
    const date = new Date(dt);
    const exams = await prisma.exam.findMany({
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
  }

  @Query(() => [ExamRecord])
  @UseMiddleware(isAuthP)
  async studentsWhoSingedExam(
    @Ctx() { req }: MyContext,
    @Arg("subjectID", () => String) subjectID: string
  ) {
    ///Students who singed particular exam
    const dt = Date.now();
    const date = new Date(dt);
    return await prisma.examRecord.findMany({
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
  }
}
