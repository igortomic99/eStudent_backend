import { PrismaClient } from "@prisma/client";
import { Arg, Query, Resolver } from "type-graphql";
import { Exam } from "../types/Exam";
import { ExamRecord } from "../types/ExamRecord";

const prisma = new PrismaClient();

@Resolver(Exam)
export class ExamResolver {
  @Query(() => [ExamRecord])
  async getAllExams() {
    return await prisma.examRecord.findMany({});
  }

  @Query(() => ExamRecord)
  async ExamRecordFromId(@Arg("id", () => String) id: string) {
    return await prisma.examRecord.findUnique({
      where: {
        id,
      },
      include: {
        student: true,
        exam: {
          include: {
            subject: true,
          },
        },
      },
    });
  }
}
