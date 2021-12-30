import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamUpdateWithoutExaminationPeriodInput } from "../inputs/ExamUpdateWithoutExaminationPeriodInput";
import { ExamWhereUniqueInput } from "../inputs/ExamWhereUniqueInput";

@TypeGraphQL.InputType("ExamUpdateWithWhereUniqueWithoutExaminationPeriodInput", {
  isAbstract: true
})
export class ExamUpdateWithWhereUniqueWithoutExaminationPeriodInput {
  @TypeGraphQL.Field(_type => ExamWhereUniqueInput, {
    nullable: false
  })
  where!: ExamWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExamUpdateWithoutExaminationPeriodInput, {
    nullable: false
  })
  data!: ExamUpdateWithoutExaminationPeriodInput;
}
