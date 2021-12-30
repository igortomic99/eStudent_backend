import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateModulArgs } from "./args/AggregateModulArgs";
import { Modul } from "../../../models/Modul";
import { AggregateModul } from "../../outputs/AggregateModul";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Modul)
export class AggregateModulResolver {
  @TypeGraphQL.Query(_returns => AggregateModul, {
    nullable: false
  })
  async aggregateModul(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateModulArgs): Promise<AggregateModul> {
    return getPrismaFromContext(ctx).modul.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
