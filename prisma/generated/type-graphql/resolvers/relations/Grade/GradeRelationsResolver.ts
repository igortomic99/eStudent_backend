import * as TypeGraphQL from "type-graphql";
import { ExamRecord } from "../../../models/ExamRecord";
import { Grade } from "../../../models/Grade";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Grade)
export class GradeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => ExamRecord, {
    nullable: true
  })
  async exam(@TypeGraphQL.Root() grade: Grade, @TypeGraphQL.Ctx() ctx: any): Promise<ExamRecord | null> {
    return getPrismaFromContext(ctx).grade.findUnique({
      where: {
        id: grade.id,
      },
    }).exam({});
  }
}
