import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamCreateWithoutExaminationPeriodInput } from "../inputs/ExamCreateWithoutExaminationPeriodInput";
import { ExamUpdateWithoutExaminationPeriodInput } from "../inputs/ExamUpdateWithoutExaminationPeriodInput";
import { ExamWhereUniqueInput } from "../inputs/ExamWhereUniqueInput";

@TypeGraphQL.InputType("ExamUpsertWithWhereUniqueWithoutExaminationPeriodInput", {
  isAbstract: true
})
export class ExamUpsertWithWhereUniqueWithoutExaminationPeriodInput {
  @TypeGraphQL.Field(_type => ExamWhereUniqueInput, {
    nullable: false
  })
  where!: ExamWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExamUpdateWithoutExaminationPeriodInput, {
    nullable: false
  })
  update!: ExamUpdateWithoutExaminationPeriodInput;

  @TypeGraphQL.Field(_type => ExamCreateWithoutExaminationPeriodInput, {
    nullable: false
  })
  create!: ExamCreateWithoutExaminationPeriodInput;
}
