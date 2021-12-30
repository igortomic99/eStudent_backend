import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GradeAvgAggregate } from "../outputs/GradeAvgAggregate";
import { GradeCountAggregate } from "../outputs/GradeCountAggregate";
import { GradeMaxAggregate } from "../outputs/GradeMaxAggregate";
import { GradeMinAggregate } from "../outputs/GradeMinAggregate";
import { GradeSumAggregate } from "../outputs/GradeSumAggregate";

@TypeGraphQL.ObjectType("AggregateGrade", {
  isAbstract: true
})
export class AggregateGrade {
  @TypeGraphQL.Field(_type => GradeCountAggregate, {
    nullable: true
  })
  _count!: GradeCountAggregate | null;

  @TypeGraphQL.Field(_type => GradeAvgAggregate, {
    nullable: true
  })
  _avg!: GradeAvgAggregate | null;

  @TypeGraphQL.Field(_type => GradeSumAggregate, {
    nullable: true
  })
  _sum!: GradeSumAggregate | null;

  @TypeGraphQL.Field(_type => GradeMinAggregate, {
    nullable: true
  })
  _min!: GradeMinAggregate | null;

  @TypeGraphQL.Field(_type => GradeMaxAggregate, {
    nullable: true
  })
  _max!: GradeMaxAggregate | null;
}
