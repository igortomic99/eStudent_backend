import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamCreateWithoutExaminationPeriodInput } from "../inputs/ExamCreateWithoutExaminationPeriodInput";
import { ExamWhereUniqueInput } from "../inputs/ExamWhereUniqueInput";

@TypeGraphQL.InputType("ExamCreateOrConnectWithoutExaminationPeriodInput", {
  isAbstract: true
})
export class ExamCreateOrConnectWithoutExaminationPeriodInput {
  @TypeGraphQL.Field(_type => ExamWhereUniqueInput, {
    nullable: false
  })
  where!: ExamWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExamCreateWithoutExaminationPeriodInput, {
    nullable: false
  })
  create!: ExamCreateWithoutExaminationPeriodInput;
}
