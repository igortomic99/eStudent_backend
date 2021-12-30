import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordCreateNestedOneWithoutExamInput } from "../inputs/ExamRecordCreateNestedOneWithoutExamInput";
import { SubjectCreateNestedOneWithoutExamInput } from "../inputs/SubjectCreateNestedOneWithoutExamInput";

@TypeGraphQL.InputType("ExamCreateWithoutExaminationPeriodInput", {
  isAbstract: true
})
export class ExamCreateWithoutExaminationPeriodInput {
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

  @TypeGraphQL.Field(_type => ExamRecordCreateNestedOneWithoutExamInput, {
    nullable: true
  })
  examRecord?: ExamRecordCreateNestedOneWithoutExamInput | undefined;
}
