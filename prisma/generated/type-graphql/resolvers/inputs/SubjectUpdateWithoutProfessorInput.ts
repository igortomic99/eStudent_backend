import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumSubjectTypeFieldUpdateOperationsInput } from "../inputs/EnumSubjectTypeFieldUpdateOperationsInput";
import { ExamUpdateOneWithoutSubjectInput } from "../inputs/ExamUpdateOneWithoutSubjectInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ModulUpdateOneRequiredWithoutSubjectsInput } from "../inputs/ModulUpdateOneRequiredWithoutSubjectsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SubjectUpdateWithoutProfessorInput", {
  isAbstract: true
})
export class SubjectUpdateWithoutProfessorInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  subjectName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  espp?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumSubjectTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumSubjectTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ExamUpdateOneWithoutSubjectInput, {
    nullable: true
  })
  exam?: ExamUpdateOneWithoutSubjectInput | undefined;

  @TypeGraphQL.Field(_type => ModulUpdateOneRequiredWithoutSubjectsInput, {
    nullable: true
  })
  modul?: ModulUpdateOneRequiredWithoutSubjectsInput | undefined;
}
