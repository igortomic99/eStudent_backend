import { PrismaClient } from "@prisma/client";
import { Grade } from "../types/Grade";
import { GradeInput } from "../types/inputs/GradeInput";
import { Resolver, Query, Mutation, Arg } from "type-graphql";

const prisma = new PrismaClient();

@Resolver(Grade)
export class GradeResolver {
  @Query(() => [Grade])
  async getAllGrades(): Promise<Grade[] | null> {
    return await prisma.grade.findMany();
  }

  @Mutation(() => Grade)
  async createGrade(
    @Arg("input", () => GradeInput) input: GradeInput
  ): Promise<Grade | null> {
    let grade;
    try {
      grade = await prisma.grade.create({
        data: {
          value: input.value,
        },
      });
    } catch (err) {
      ///ADD ERR codes bro
      console.log(err.message);
      throw new Error(" add err codes bro");
    }
    return grade;
  }
}
