import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateExaminationPeriodArgs } from "./args/UpdateExaminationPeriodArgs";
import { ExaminationPeriod } from "../../../models/ExaminationPeriod";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExaminationPeriod)
export class UpdateExaminationPeriodResolver {
  @TypeGraphQL.Mutation(_returns => ExaminationPeriod, {
    nullable: true
  })
  async updateExaminationPeriod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateExaminationPeriodArgs): Promise<ExaminationPeriod | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).examinationPeriod.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
