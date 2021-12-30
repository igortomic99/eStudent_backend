import * as TypeGraphQL from "type-graphql";
import { Exam } from "../../../models/Exam";
import { ExamRecord } from "../../../models/ExamRecord";
import { ExaminationPeriod } from "../../../models/ExaminationPeriod";
import { Subject } from "../../../models/Subject";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Exam)
export class ExamRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Subject, {
    nullable: true
  })
  async subject(@TypeGraphQL.Root() exam: Exam, @TypeGraphQL.Ctx() ctx: any): Promise<Subject | null> {
    return getPrismaFromContext(ctx).exam.findUnique({
      where: {
        id: exam.id,
      },
    }).subject({});
  }

  @TypeGraphQL.FieldResolver(_type => ExaminationPeriod, {
    nullable: true
  })
  async examinationPeriod(@TypeGraphQL.Root() exam: Exam, @TypeGraphQL.Ctx() ctx: any): Promise<ExaminationPeriod | null> {
    return getPrismaFromContext(ctx).exam.findUnique({
      where: {
        id: exam.id,
      },
    }).examinationPeriod({});
  }

  @TypeGraphQL.FieldResolver(_type => ExamRecord, {
    nullable: true
  })
  async examRecord(@TypeGraphQL.Root() exam: Exam, @TypeGraphQL.Ctx() ctx: any): Promise<ExamRecord | null> {
    return getPrismaFromContext(ctx).exam.findUnique({
      where: {
        id: exam.id,
      },
    }).examRecord({});
  }
}
