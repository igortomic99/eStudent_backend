import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordAvgAggregate } from "../outputs/ExamRecordAvgAggregate";
import { ExamRecordCountAggregate } from "../outputs/ExamRecordCountAggregate";
import { ExamRecordMaxAggregate } from "../outputs/ExamRecordMaxAggregate";
import { ExamRecordMinAggregate } from "../outputs/ExamRecordMinAggregate";
import { ExamRecordSumAggregate } from "../outputs/ExamRecordSumAggregate";

@TypeGraphQL.ObjectType("ExamRecordGroupBy", {
  isAbstract: true
})
export class ExamRecordGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  points!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  passed!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  gradeID!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  examID!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  studentID!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  singed!: boolean;

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
