import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamCreateManyExaminationPeriodInput } from "../inputs/ExamCreateManyExaminationPeriodInput";

@TypeGraphQL.InputType("ExamCreateManyExaminationPeriodInputEnvelope", {
  isAbstract: true
})
export class ExamCreateManyExaminationPeriodInputEnvelope {
  @TypeGraphQL.Field(_type => [ExamCreateManyExaminationPeriodInput], {
    nullable: false
  })
  data!: ExamCreateManyExaminationPeriodInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
