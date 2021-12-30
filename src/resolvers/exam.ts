import { PrismaClient } from "@prisma/client";
import { Exam } from "../types/Exam";
import { ExamInput } from "../types/inputs/ExamInput";
import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { ExamRecord } from "../types/ExamRecord";

const prisma = new PrismaClient();

@Resolver(Exam)
export class ExamResolver {
  @Query(() => [Exam])
  async getAllExams() {
    const exams = await prisma.exam.findMany();
    return exams;
  }

  @Query(()=>ExamRecord)
  async ExamRecordFromId(
    @Arg('id',()=>String)id:string
  ){
    const exam = await prisma.examRecord.findUnique({
      where:{
        id
      },
      include:{
        student:true,
        exam:{
          include:{
            subject:true
          }
        }
      }
    })
    return exam
  }
}