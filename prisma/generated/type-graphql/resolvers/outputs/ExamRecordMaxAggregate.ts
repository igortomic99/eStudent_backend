import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ExamRecordMaxAggregate", {
  isAbstract: true
})
export class ExamRecordMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  points!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  passed!: boolean | null;

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
    nullable: true
  })
  singed!: boolean | null;
}
