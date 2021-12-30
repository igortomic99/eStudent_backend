import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ExamUpdateManyWithoutExaminationPeriodInput } from "../inputs/ExamUpdateManyWithoutExaminationPeriodInput";
import { ModulUpdateOneWithoutExaminationPeriodInput } from "../inputs/ModulUpdateOneWithoutExaminationPeriodInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ExaminationPeriodUpdateInput", {
  isAbstract: true
})
export class ExaminationPeriodUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  beginningDate?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  endDate?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ModulUpdateOneWithoutExaminationPeriodInput, {
    nullable: true
  })
  modul?: ModulUpdateOneWithoutExaminationPeriodInput | undefined;

  @TypeGraphQL.Field(_type => ExamUpdateManyWithoutExaminationPeriodInput, {
    nullable: true
  })
  exams?: ExamUpdateManyWithoutExaminationPeriodInput | undefined;
}
