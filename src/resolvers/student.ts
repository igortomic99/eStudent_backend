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
  UseMiddleware
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
  async allStudents(): Promise<Student[]> {
    const students = await prisma.student.findMany();
    return students;
  }

  @Mutation(() => Student)
  async createStudent(
    @Arg("input", () => StudentInput) input: StudentInput
  ): Promise<Student | null> {
    let student;

    ///Default password is fisrtname + lastname
    const hashedPassword = await argon2.hash(
      input.firstName.concat(input.lastName)
    );

    ///Finding module from module name
    const module = await prisma.modul.findUnique({
      where: {
        moduleName: input.moduleName,
      },
    });

    ///Finding class from class number
    const klasa = await prisma.class.findFirst({
      where: {
        classLabel: input.classNumber,
      },
    });

    //Checking if module and class exist
    if (!module) {
      throw new Error("ER201");
    }
    if (!klasa) {
      throw new Error("ER301");
    }

    //Creating student
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
  async isLoggedIn(@Ctx() { req }: MyContext): Promise<Boolean> {
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
  ): Promise<Boolean> {
    let registeredExam;
    try {
      registeredExam = await prisma.examRecord.create({
        data: {
          studentID: req.session.studentID,
          singed: true,
          examID,
        },
      });
    } catch (err) {
      //Add error codes
      console.log(err); //Delete before production
      if (err) return false;
    }
    return true;
  }

  @Query(() => Float)
  @UseMiddleware(isAuth)
  async averageGrade(@Ctx() { req }: MyContext): Promise< Number | null > {
    ///Calculate average grade
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

    ///Validation
    if (!avg) {
      throw new Error("ER103");
    }

    return avg._avg.value;
  }

  @Query(() => Int)
  @UseMiddleware(isAuth)
  async sumESPP(@Ctx() { req }: MyContext): Promise< Number | null > {
    ///Calculating sum of espp
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

    ///Validation
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
    ///Check if student exists
    const student = await prisma.student.findUnique({
      where: {
        brind: brind,
      },
    });

    ///If not throw error
    if (!student) {
      throw new Error("ER001");
    }

    ///Verify password
    const valid = await argon2.verify(student.password, password);
    if (!valid) {
      throw new Error("ER001");
    }

    ///Setting student session
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
  async me(@Ctx() { req }: MyContext): Promise<Student|null> {
    return await prisma.student.findUnique({
      where: {
        id: req.session.studentID
      },
    });
  }

  @Query(() => [Student])
  async studentsForModul(@Arg("moduleName", () => String) moduleName: string):Promise<Student[] | null> {
    ///Finding student from particular module
    const students = await prisma.student.findMany({
      where: {
        modul: {
          moduleName,
        },
      },
    });

    ///Validation
    if (!students) {
      throw new Error("ER101");
    }
    return students;
  }

  @Query(() => [ExamRecord])
  @UseMiddleware(isAuth)
  async passedExams(@Ctx() { req }: MyContext){
    ///Passed exams for particular student
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

    ///Validate
    if (!exams) {
      throw new Error("ER105");
    }
    return exams;
  }

  @Query(() => [ExamRecord])
  @UseMiddleware(isAuth)
  async registeredExams(@Ctx() { req }: MyContext) {
    ///Registered exams for particular student
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
    ///Validate 
    ///Create error code fore this particular situation
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
    let registeredExam;

    ///Check if exam  is registered
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
      registeredExam = await prisma.examRecord.delete({
        where: {
          id: result?.id,
        },
      });
    } catch (err) {
      ///ADD ERRR CODES
      console.log(err);
      if (err) return false;
    }
    return true;
  }
}
