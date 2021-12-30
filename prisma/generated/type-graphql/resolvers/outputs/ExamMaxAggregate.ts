import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ExamMaxAggregate", {
  isAbstract: true
})
export class ExamMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subjectID!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  exPeriodID!: string | null;
}
