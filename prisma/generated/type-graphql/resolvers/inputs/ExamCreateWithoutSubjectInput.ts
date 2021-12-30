import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordCreateNestedOneWithoutExamInput } from "../inputs/ExamRecordCreateNestedOneWithoutExamInput";
import { ExaminationPeriodCreateNestedOneWithoutExamsInput } from "../inputs/ExaminationPeriodCreateNestedOneWithoutExamsInput";

@TypeGraphQL.InputType("ExamCreateWithoutSubjectInput", {
  isAbstract: true
})
export class ExamCreateWithoutSubjectInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => ExaminationPeriodCreateNestedOneWithoutExamsInput, {
    nullable: true
  })
  examinationPeriod?: ExaminationPeriodCreateNestedOneWithoutExamsInput | undefined;

  @TypeGraphQL.Field(_type => ExamRecordCreateNestedOneWithoutExamInput, {
    nullable: true
  })
  examRecord?: ExamRecordCreateNestedOneWithoutExamInput | undefined;
}
