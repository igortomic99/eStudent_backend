import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumSubjectTypeFieldUpdateOperationsInput } from "../inputs/EnumSubjectTypeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ModulUpdateOneRequiredWithoutSubjectsInput } from "../inputs/ModulUpdateOneRequiredWithoutSubjectsInput";
import { ProfessorUpdateOneRequiredWithoutSubjectsInput } from "../inputs/ProfessorUpdateOneRequiredWithoutSubjectsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SubjectUpdateWithoutExamInput", {
  isAbstract: true
})
export class SubjectUpdateWithoutExamInput {
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

  @TypeGraphQL.Field(_type => ProfessorUpdateOneRequiredWithoutSubjectsInput, {
    nullable: true
  })
  professor?: ProfessorUpdateOneRequiredWithoutSubjectsInput | undefined;

  @TypeGraphQL.Field(_type => ModulUpdateOneRequiredWithoutSubjectsInput, {
    nullable: true
  })
  modul?: ModulUpdateOneRequiredWithoutSubjectsInput | undefined;
}
