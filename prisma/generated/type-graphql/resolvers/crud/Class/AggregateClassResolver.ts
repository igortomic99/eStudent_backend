import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateClassArgs } from "./args/AggregateClassArgs";
import { Class } from "../../../models/Class";
import { AggregateClass } from "../../outputs/AggregateClass";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Class)
export class AggregateClassResolver {
  @TypeGraphQL.Query(_returns => AggregateClass, {
    nullable: false
  })
  async aggregateClass(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateClassArgs): Promise<AggregateClass> {
    return getPrismaFromContext(ctx).class.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
