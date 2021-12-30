import { PrismaClient } from "@prisma/client";
import { Exam } from "../types/Exam";
import { ExamInput } from "../types/inputs/ExamInput";
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware
} from "type-graphql";
import { MyContext } from "../context";
import { isAuth } from "../middleware/isAuth";
import { ExaminationPeriod } from "../types/ExaminationPeriod";
import { ExaminationPeriodInput } from "../types/inputs/ExaminationPeriodInput";

const prisma = new PrismaClient();

@Resolver(ExaminationPeriod)
export class ExaminationPeriodResolver {
  @Query(() => [ExaminationPeriod])
  async getAllEXP() {
    const grades = await prisma.examinationPeriod.findMany();
    return grades;
  }

  @Mutation(() => ExaminationPeriod)
  async createEXP(
    @Arg("input", () => ExaminationPeriodInput) input: ExaminationPeriodInput
  ) {
    let exPeriod;
    try {
      exPeriod = await prisma.examinationPeriod.create({
        data: {
          name: input.name,
          beginningDate: input.beginningDate,
          endDate: input.endDate,
          modulID: input.modulID,
        },
      });
    } catch (err) {
      console.log(err.message);
    }
    return exPeriod;
  }

  @Query(() => ExaminationPeriod)
  @UseMiddleware(isAuth)
  async examsFromExaminationPeriod(@Ctx() { req }: MyContext) {
    const student = await prisma.student.findUnique({
      where: {
        id: req.session.studentID,
      },
    });
    if (!student) {
      throw new Error("There is no such student");
    }
    const dt = Date.now();
    const date = new Date(dt);
    const examinationPeriod = await prisma.examinationPeriod.findFirst({
      where: {
        modulID: student?.modulID,
        beginningDate: {
          gte: date,
        },
      },
      select:{
        exams:{
          select:{
            id:true,
            date:true,
            examRecord:{
              select:{
                id:true,
                studentID:true,
                singed:true
              }
            },
            subject:{
              select:{
                espp:true,
                subjectName:true,
                type:true,
                professor:{
                  select:{
                    firstName:true,
                    lastName:true
                  }
                }
              }
            }
          }
        },
        id:true,
        name:true,
        beginningDate:true,
        endDate:true,
      }
    });
    if (!examinationPeriod) {
      throw new Error("There are no examination periods currently");
    }
    return examinationPeriod;
  }

  @Mutation(() => Exam)
  async addExam(@Arg("input", () => ExamInput) input: ExamInput) {
    let exam;
    try {
      exam = await prisma.exam.create({
        data: {
          date:input.date,
          exPeriodID:input.exPeriodID,
          subjectID:input.subjectID,
        },
      });
    } catch (err) {
      console.log(err.message);
    }
    return exam;
  }
}
