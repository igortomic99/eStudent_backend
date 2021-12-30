import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ExamRecordUpdateOneWithoutExamInput } from "../inputs/ExamRecordUpdateOneWithoutExamInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { SubjectUpdateOneWithoutExamInput } from "../inputs/SubjectUpdateOneWithoutExamInput";

@TypeGraphQL.InputType("ExamUpdateWithoutExaminationPeriodInput", {
  isAbstract: true
})
export class ExamUpdateWithoutExaminationPeriodInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  date?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SubjectUpdateOneWithoutExamInput, {
    nullable: true
  })
  subject?: SubjectUpdateOneWithoutExamInput | undefined;

  @TypeGraphQL.Field(_type => ExamRecordUpdateOneWithoutExamInput, {
    nullable: true
  })
  examRecord?: ExamRecordUpdateOneWithoutExamInput | undefined;
}
