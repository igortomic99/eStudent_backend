import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExaminationPeriodUpdateManyWithoutModulInput } from "../inputs/ExaminationPeriodUpdateManyWithoutModulInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { StudentUpdateManyWithoutModulInput } from "../inputs/StudentUpdateManyWithoutModulInput";
import { SubjectUpdateManyWithoutModulInput } from "../inputs/SubjectUpdateManyWithoutModulInput";

@TypeGraphQL.InputType("ModulUpdateInput", {
  isAbstract: true
})
export class ModulUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  moduleName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  moduleCode?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StudentUpdateManyWithoutModulInput, {
    nullable: true
  })
  students?: StudentUpdateManyWithoutModulInput | undefined;

  @TypeGraphQL.Field(_type => SubjectUpdateManyWithoutModulInput, {
    nullable: true
  })
  subjects?: SubjectUpdateManyWithoutModulInput | undefined;

  @TypeGraphQL.Field(_type => ExaminationPeriodUpdateManyWithoutModulInput, {
    nullable: true
  })
  examinationPeriod?: ExaminationPeriodUpdateManyWithoutModulInput | undefined;
}
