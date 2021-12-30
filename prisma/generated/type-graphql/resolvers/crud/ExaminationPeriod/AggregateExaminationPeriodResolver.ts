import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateExaminationPeriodArgs } from "./args/AggregateExaminationPeriodArgs";
import { ExaminationPeriod } from "../../../models/ExaminationPeriod";
import { AggregateExaminationPeriod } from "../../outputs/AggregateExaminationPeriod";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExaminationPeriod)
export class AggregateExaminationPeriodResolver {
  @TypeGraphQL.Query(_returns => AggregateExaminationPeriod, {
    nullable: false
  })
  async aggregateExaminationPeriod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateExaminationPeriodArgs): Promise<AggregateExaminationPeriod> {
    return getPrismaFromContext(ctx).examinationPeriod.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
