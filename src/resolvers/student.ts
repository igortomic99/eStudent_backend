import { PrismaClient } from "@prisma/client";
import argon2 from "argon2";
import {
  Arg,
  Ctx,
  Float,
  Int,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { MyContext } from "../context";
import { isAuth } from "../middleware/isAuth";
import { ExamRecord } from "../types/ExamRecord";
import { StudentInput } from "../types/inputs/StudentInput";
import { Student } from "../types/Student";

const prisma = new PrismaClient();

@Resolver(Student)
export class StudentResolver {
  @Query(() => [Student])
  async getAll() {
    const students = await prisma.student.findMany();
    return students;
  }

  @Mutation(() => Student)
  async createStudent(@Arg("input", () => StudentInput) input: StudentInput) {
    let student;
    const hashedPassword = await argon2.hash(
      input.firstName.concat(input.lastName)
    );
    const module = await prisma.modul.findUnique({
      where: {
        moduleName: input.moduleName,
      },
    });
    const klasa = await prisma.class.findFirst({
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
      student = await prisma.student.create({
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
    } catch (err) {
      console.log(err.message); //OBRISI PRE PRODUKCIJE
      throw new Error("ER100");
    }
    return student;
  }

  @Query(() => Boolean)
  async isLoggedIn(@Ctx() { req }: MyContext) {
    if (req.session.studentID) {
      return true;
    }
    return false;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async registerExam(
    @Arg("examID", () => String) examID: string,
    @Ctx() { req }: MyContext
  ) {
    let regexa;
    try {
      regexa = await prisma.examRecord.create({
        data: {
          studentID: req.session.studentID,
          singed: true,
          examID,
        },
      });
    } catch (err) {
      console.log(err);
      if (err) return false;
    }
    return true;
  }

  @Query(() => Float)
  @UseMiddleware(isAuth)
  async averageGrade(@Ctx() { req }: MyContext) {
    const avg = await prisma.grade.aggregate({
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
  }

  @Query(() => Int)
  @UseMiddleware(isAuth)
  async sumESPP(@Ctx() { req }: MyContext) {
    const sum = await prisma.subject.aggregate({
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
  }

  @Mutation(() => Student)
  async login(
    @Arg("brind") brind: string,
    @Arg("password") password: string,
    @Ctx() { req }: MyContext
  ) {
    const student = await prisma.student.findUnique({
      where: {
        brind: brind,
      },
    });

    if (!student) {
      throw new Error("ER001");
    }

    const valid = await argon2.verify(student.password, password);
    if (!valid) {
      throw new Error("ER001");
    }
    req.session!.studentID = student.id;
    return student;
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
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

  @Query(() => Student)
  @UseMiddleware(isAuth)
  async me(@Ctx() { req }: MyContext) {
    const studentID = req.session.studentID;
    const student = await prisma.student.findUnique({
      where: {
        id: studentID,
      },
    });
    return student;
  }

  @Query(() => [Student])
  async studentsForModul(@Arg("moduleName", () => String) moduleName: string) {
    const students = await prisma.student.findMany({
      where: {
        modul: {
          moduleName,
        },
      },
    });
    if(!students){
      throw new Error("ER101")
    }
    return students;
  }

  @Query(() => [ExamRecord])
  @UseMiddleware(isAuth)
  async passedExams(@Ctx() { req }: MyContext) {
    const exams = await prisma.examRecord.findMany({
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
  }

  @Query(() => [ExamRecord])
  @UseMiddleware(isAuth)
  async registeredExams(@Ctx() { req }: MyContext) {
    const exams = await prisma.examRecord.findMany({
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
  }

  @Mutation(() => Boolean)
  async deregisterExam(
    @Arg("examID", () => String) examID: string,
    @Ctx() { req }: MyContext
  ) {
    let regexa;
    const result = await prisma.examRecord.findFirst({
      where: {
        examID,
        studentID: req.session.studentID,
      },
    });
    if (!result) {
      throw new Error("ER401");
    }
    try {
      regexa = await prisma.examRecord.delete({
        where: {
          id: result?.id,
        },
      });
    } catch (err) {
      console.log(err);
      if (err) return false;
    }
    return true;
  }
}
