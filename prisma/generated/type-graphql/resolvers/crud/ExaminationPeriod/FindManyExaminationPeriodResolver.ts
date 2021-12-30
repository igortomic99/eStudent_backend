import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyExaminationPeriodArgs } from "./args/FindManyExaminationPeriodArgs";
import { ExaminationPeriod } from "../../../models/ExaminationPeriod";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExaminationPeriod)
export class FindManyExaminationPeriodResolver {
  @TypeGraphQL.Query(_returns => [ExaminationPeriod], {
    nullable: false
  })
  async examinationPeriods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyExaminationPeriodArgs): Promise<ExaminationPeriod[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).examinationPeriod.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
