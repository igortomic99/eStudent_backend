import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectAvgAggregate } from "../outputs/SubjectAvgAggregate";
import { SubjectCountAggregate } from "../outputs/SubjectCountAggregate";
import { SubjectMaxAggregate } from "../outputs/SubjectMaxAggregate";
import { SubjectMinAggregate } from "../outputs/SubjectMinAggregate";
import { SubjectSumAggregate } from "../outputs/SubjectSumAggregate";

@TypeGraphQL.ObjectType("AggregateSubject", {
  isAbstract: true
})
export class AggregateSubject {
  @TypeGraphQL.Field(_type => SubjectCountAggregate, {
    nullable: true
  })
  _count!: SubjectCountAggregate | null;

  @TypeGraphQL.Field(_type => SubjectAvgAggregate, {
    nullable: true
  })
  _avg!: SubjectAvgAggregate | null;

  @TypeGraphQL.Field(_type => SubjectSumAggregate, {
    nullable: true
  })
  _sum!: SubjectSumAggregate | null;

  @TypeGraphQL.Field(_type => SubjectMinAggregate, {
    nullable: true
  })
  _min!: SubjectMinAggregate | null;

  @TypeGraphQL.Field(_type => SubjectMaxAggregate, {
    nullable: true
  })
  _max!: SubjectMaxAggregate | null;
}
