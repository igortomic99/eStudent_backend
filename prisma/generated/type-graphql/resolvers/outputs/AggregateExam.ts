import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamCountAggregate } from "../outputs/ExamCountAggregate";
import { ExamMaxAggregate } from "../outputs/ExamMaxAggregate";
import { ExamMinAggregate } from "../outputs/ExamMinAggregate";

@TypeGraphQL.ObjectType("AggregateExam", {
  isAbstract: true
})
export class AggregateExam {
  @TypeGraphQL.Field(_type => ExamCountAggregate, {
    nullable: true
  })
  _count!: ExamCountAggregate | null;

  @TypeGraphQL.Field(_type => ExamMinAggregate, {
    nullable: true
  })
  _min!: ExamMinAggregate | null;

  @TypeGraphQL.Field(_type => ExamMaxAggregate, {
    nullable: true
  })
  _max!: ExamMaxAggregate | null;
}
