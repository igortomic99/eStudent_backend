import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueExaminationPeriodArgs } from "./args/FindUniqueExaminationPeriodArgs";
import { ExaminationPeriod } from "../../../models/ExaminationPeriod";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExaminationPeriod)
export class FindUniqueExaminationPeriodResolver {
  @TypeGraphQL.Query(_returns => ExaminationPeriod, {
    nullable: true
  })
  async examinationPeriod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueExaminationPeriodArgs): Promise<ExaminationPeriod | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).examinationPeriod.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
