import * as TypeGraphQL from "type-graphql";
import { Exam } from "../../../models/Exam";
import { ExaminationPeriod } from "../../../models/ExaminationPeriod";
import { Modul } from "../../../models/Modul";
import { ExaminationPeriodExamsArgs } from "./args/ExaminationPeriodExamsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExaminationPeriod)
export class ExaminationPeriodRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Modul, {
    nullable: true
  })
  async modul(@TypeGraphQL.Root() examinationPeriod: ExaminationPeriod, @TypeGraphQL.Ctx() ctx: any): Promise<Modul | null> {
    return getPrismaFromContext(ctx).examinationPeriod.findUnique({
      where: {
        id: examinationPeriod.id,
      },
    }).modul({});
  }

  @TypeGraphQL.FieldResolver(_type => [Exam], {
    nullable: false
  })
  async exams(@TypeGraphQL.Root() examinationPeriod: ExaminationPeriod, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ExaminationPeriodExamsArgs): Promise<Exam[]> {
    return getPrismaFromContext(ctx).examinationPeriod.findUnique({
      where: {
        id: examinationPeriod.id,
      },
    }).exams(args);
  }
}
