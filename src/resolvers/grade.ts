import { PrismaClient } from "@prisma/client";
import { Grade } from "../types/Grade";
import { GradeInput } from "../types/inputs/GradeInput";
import { Resolver, Query, Mutation, Arg } from "type-graphql";

const prisma = new PrismaClient();

@Resolver(Grade)
export class GradeResolver {
  @Query(() => [Grade])
  async getAllGrades() {
    const grades = await prisma.grade.findMany();
    return grades;
  }

  @Mutation(() => Grade)
  async createGrade(@Arg("input", () => GradeInput) input: GradeInput) {
    let grade;
    try {
      grade = await prisma.grade.create({
        data: {
          value: input.value,
        },
      });
    } catch (err) {
      console.log(err.message);
    }
    return grade;
  }
}
