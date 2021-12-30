import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSubjectArgs } from "./args/AggregateSubjectArgs";
import { Subject } from "../../../models/Subject";
import { AggregateSubject } from "../../outputs/AggregateSubject";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Subject)
export class AggregateSubjectResolver {
  @TypeGraphQL.Query(_returns => AggregateSubject, {
    nullable: false
  })
  async aggregateSubject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSubjectArgs): Promise<AggregateSubject> {
    return getPrismaFromContext(ctx).subject.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
