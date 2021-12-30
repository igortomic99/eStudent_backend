import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModulCountAggregate } from "../outputs/ModulCountAggregate";
import { ModulMaxAggregate } from "../outputs/ModulMaxAggregate";
import { ModulMinAggregate } from "../outputs/ModulMinAggregate";

@TypeGraphQL.ObjectType("AggregateModul", {
  isAbstract: true
})
export class AggregateModul {
  @TypeGraphQL.Field(_type => ModulCountAggregate, {
    nullable: true
  })
  _count!: ModulCountAggregate | null;

  @TypeGraphQL.Field(_type => ModulMinAggregate, {
    nullable: true
  })
  _min!: ModulMinAggregate | null;

  @TypeGraphQL.Field(_type => ModulMaxAggregate, {
    nullable: true
  })
  _max!: ModulMaxAggregate | null;
}
