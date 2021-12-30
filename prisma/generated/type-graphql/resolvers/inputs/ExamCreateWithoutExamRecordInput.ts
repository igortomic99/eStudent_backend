import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExaminationPeriodCreateNestedOneWithoutExamsInput } from "../inputs/ExaminationPeriodCreateNestedOneWithoutExamsInput";
import { SubjectCreateNestedOneWithoutExamInput } from "../inputs/SubjectCreateNestedOneWithoutExamInput";

@TypeGraphQL.InputType("ExamCreateWithoutExamRecordInput", {
  isAbstract: true
})
export class ExamCreateWithoutExamRecordInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => SubjectCreateNestedOneWithoutExamInput, {
    nullable: true
  })
  subject?: SubjectCreateNestedOneWithoutExamInput | undefined;

  @TypeGraphQL.Field(_type => ExaminationPeriodCreateNestedOneWithoutExamsInput, {
    nullable: true
  })
  examinationPeriod?: ExaminationPeriodCreateNestedOneWithoutExamsInput | undefined;
}
