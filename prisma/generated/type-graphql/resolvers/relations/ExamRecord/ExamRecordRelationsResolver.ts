import * as TypeGraphQL from "type-graphql";
import { Exam } from "../../../models/Exam";
import { ExamRecord } from "../../../models/ExamRecord";
import { Grade } from "../../../models/Grade";
import { Student } from "../../../models/Student";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExamRecord)
export class ExamRecordRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Grade, {
    nullable: true
  })
  async grade(@TypeGraphQL.Root() examRecord: ExamRecord, @TypeGraphQL.Ctx() ctx: any): Promise<Grade | null> {
    return getPrismaFromContext(ctx).examRecord.findUnique({
      where: {
        id: examRecord.id,
      },
    }).grade({});
  }

  @TypeGraphQL.FieldResolver(_type => Exam, {
    nullable: true
  })
  async exam(@TypeGraphQL.Root() examRecord: ExamRecord, @TypeGraphQL.Ctx() ctx: any): Promise<Exam | null> {
    return getPrismaFromContext(ctx).examRecord.findUnique({
      where: {
        id: examRecord.id,
      },
    }).exam({});
  }

  @TypeGraphQL.FieldResolver(_type => Student, {
    nullable: true
  })
  async student(@TypeGraphQL.Root() examRecord: ExamRecord, @TypeGraphQL.Ctx() ctx: any): Promise<Student | null> {
    return getPrismaFromContext(ctx).examRecord.findUnique({
      where: {
        id: examRecord.id,
      },
    }).student({});
  }
}
