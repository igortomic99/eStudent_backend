import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateExamRecordArgs } from "./args/AggregateExamRecordArgs";
import { ExamRecord } from "../../../models/ExamRecord";
import { AggregateExamRecord } from "../../outputs/AggregateExamRecord";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExamRecord)
export class AggregateExamRecordResolver {
  @TypeGraphQL.Query(_returns => AggregateExamRecord, {
    nullable: false
  })
  async aggregateExamRecord(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateExamRecordArgs): Promise<AggregateExamRecord> {
    return getPrismaFromContext(ctx).examRecord.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
