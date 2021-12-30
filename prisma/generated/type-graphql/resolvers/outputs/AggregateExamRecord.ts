import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordAvgAggregate } from "../outputs/ExamRecordAvgAggregate";
import { ExamRecordCountAggregate } from "../outputs/ExamRecordCountAggregate";
import { ExamRecordMaxAggregate } from "../outputs/ExamRecordMaxAggregate";
import { ExamRecordMinAggregate } from "../outputs/ExamRecordMinAggregate";
import { ExamRecordSumAggregate } from "../outputs/ExamRecordSumAggregate";

@TypeGraphQL.ObjectType("AggregateExamRecord", {
  isAbstract: true
})
export class AggregateExamRecord {
  @TypeGraphQL.Field(_type => ExamRecordCountAggregate, {
    nullable: true
  })
  _count!: ExamRecordCountAggregate | null;

  @TypeGraphQL.Field(_type => ExamRecordAvgAggregate, {
    nullable: true
  })
  _avg!: ExamRecordAvgAggregate | null;

  @TypeGraphQL.Field(_type => ExamRecordSumAggregate, {
    nullable: true
  })
  _sum!: ExamRecordSumAggregate | null;

  @TypeGraphQL.Field(_type => ExamRecordMinAggregate, {
    nullable: true
  })
  _min!: ExamRecordMinAggregate | null;

  @TypeGraphQL.Field(_type => ExamRecordMaxAggregate, {
    nullable: true
  })
  _max!: ExamRecordMaxAggregate | null;
}
