import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamCountAggregate } from "../outputs/ExamCountAggregate";
import { ExamMaxAggregate } from "../outputs/ExamMaxAggregate";
import { ExamMinAggregate } from "../outputs/ExamMinAggregate";

@TypeGraphQL.ObjectType("ExamGroupBy", {
  isAbstract: true
})
export class ExamGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subjectID!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  exPeriodID!: string | null;

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
