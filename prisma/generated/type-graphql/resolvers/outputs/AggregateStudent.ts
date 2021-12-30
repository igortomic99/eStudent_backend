import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCountAggregate } from "../outputs/StudentCountAggregate";
import { StudentMaxAggregate } from "../outputs/StudentMaxAggregate";
import { StudentMinAggregate } from "../outputs/StudentMinAggregate";

@TypeGraphQL.ObjectType("AggregateStudent", {
  isAbstract: true
})
export class AggregateStudent {
  @TypeGraphQL.Field(_type => StudentCountAggregate, {
    nullable: true
  })
  _count!: StudentCountAggregate | null;

  @TypeGraphQL.Field(_type => StudentMinAggregate, {
    nullable: true
  })
  _min!: StudentMinAggregate | null;

  @TypeGraphQL.Field(_type => StudentMaxAggregate, {
    nullable: true
  })
  _max!: StudentMaxAggregate | null;
}
