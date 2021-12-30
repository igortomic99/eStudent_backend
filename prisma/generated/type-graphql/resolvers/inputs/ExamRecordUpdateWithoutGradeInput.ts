import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { ExamUpdateOneWithoutExamRecordInput } from "../inputs/ExamUpdateOneWithoutExamRecordInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { StudentUpdateOneWithoutExamsInput } from "../inputs/StudentUpdateOneWithoutExamsInput";

@TypeGraphQL.InputType("ExamRecordUpdateWithoutGradeInput", {
  isAbstract: true
})
export class ExamRecordUpdateWithoutGradeInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  points?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  passed?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  singed?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ExamUpdateOneWithoutExamRecordInput, {
    nullable: true
  })
  exam?: ExamUpdateOneWithoutExamRecordInput | undefined;

  @TypeGraphQL.Field(_type => StudentUpdateOneWithoutExamsInput, {
    nullable: true
  })
  student?: StudentUpdateOneWithoutExamsInput | undefined;
}
