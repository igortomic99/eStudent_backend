import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByExamRecordArgs } from "./args/GroupByExamRecordArgs";
import { ExamRecord } from "../../../models/ExamRecord";
import { ExamRecordGroupBy } from "../../outputs/ExamRecordGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExamRecord)
export class GroupByExamRecordResolver {
  @TypeGraphQL.Query(_returns => [ExamRecordGroupBy], {
    nullable: false
  })
  async groupByExamRecord(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByExamRecordArgs): Promise<ExamRecordGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).examRecord.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
