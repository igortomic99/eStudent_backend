import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClassAvgAggregate } from "../outputs/ClassAvgAggregate";
import { ClassCountAggregate } from "../outputs/ClassCountAggregate";
import { ClassMaxAggregate } from "../outputs/ClassMaxAggregate";
import { ClassMinAggregate } from "../outputs/ClassMinAggregate";
import { ClassSumAggregate } from "../outputs/ClassSumAggregate";

@TypeGraphQL.ObjectType("AggregateClass", {
  isAbstract: true
})
export class AggregateClass {
  @TypeGraphQL.Field(_type => ClassCountAggregate, {
    nullable: true
  })
  _count!: ClassCountAggregate | null;

  @TypeGraphQL.Field(_type => ClassAvgAggregate, {
    nullable: true
  })
  _avg!: ClassAvgAggregate | null;

  @TypeGraphQL.Field(_type => ClassSumAggregate, {
    nullable: true
  })
  _sum!: ClassSumAggregate | null;

  @TypeGraphQL.Field(_type => ClassMinAggregate, {
    nullable: true
  })
  _min!: ClassMinAggregate | null;

  @TypeGraphQL.Field(_type => ClassMaxAggregate, {
    nullable: true
  })
  _max!: ClassMaxAggregate | null;
}
