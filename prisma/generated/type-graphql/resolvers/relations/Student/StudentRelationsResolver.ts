import * as TypeGraphQL from "type-graphql";
import { Class } from "../../../models/Class";
import { ExamRecord } from "../../../models/ExamRecord";
import { Modul } from "../../../models/Modul";
import { Student } from "../../../models/Student";
import { StudentExamsArgs } from "./args/StudentExamsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Student)
export class StudentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Modul, {
    nullable: false
  })
  async modul(@TypeGraphQL.Root() student: Student, @TypeGraphQL.Ctx() ctx: any): Promise<Modul> {
    return getPrismaFromContext(ctx).student.findUnique({
      where: {
        id: student.id,
      },
    }).modul({});
  }

  @TypeGraphQL.FieldResolver(_type => Class, {
    nullable: false
  })
  async class(@TypeGraphQL.Root() student: Student, @TypeGraphQL.Ctx() ctx: any): Promise<Class> {
    return getPrismaFromContext(ctx).student.findUnique({
      where: {
        id: student.id,
      },
    }).class({});
  }

  @TypeGraphQL.FieldResolver(_type => [ExamRecord], {
    nullable: false
  })
  async exams(@TypeGraphQL.Root() student: Student, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: StudentExamsArgs): Promise<ExamRecord[]> {
    return getPrismaFromContext(ctx).student.findUnique({
      where: {
        id: student.id,
      },
    }).exams(args);
  }
}
