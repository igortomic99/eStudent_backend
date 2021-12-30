import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { StudentUpdateManyWithoutClassInput } from "../inputs/StudentUpdateManyWithoutClassInput";

@TypeGraphQL.InputType("ClassUpdateInput", {
  isAbstract: true
})
export class ClassUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  classLabel?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StudentUpdateManyWithoutClassInput, {
    nullable: true
  })
  sudents?: StudentUpdateManyWithoutClassInput | undefined;
}
