import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ExamRecordUpdateOneWithoutExamInput } from "../inputs/ExamRecordUpdateOneWithoutExamInput";
import { ExaminationPeriodUpdateOneWithoutExamsInput } from "../inputs/ExaminationPeriodUpdateOneWithoutExamsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ExamUpdateWithoutSubjectInput", {
  isAbstract: true
})
export class ExamUpdateWithoutSubjectInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  date?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ExaminationPeriodUpdateOneWithoutExamsInput, {
    nullable: true
  })
  examinationPeriod?: ExaminationPeriodUpdateOneWithoutExamsInput | undefined;

  @TypeGraphQL.Field(_type => ExamRecordUpdateOneWithoutExamInput, {
    nullable: true
  })
  examRecord?: ExamRecordUpdateOneWithoutExamInput | undefined;
}
