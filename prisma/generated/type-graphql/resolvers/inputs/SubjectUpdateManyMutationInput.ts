import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumSubjectTypeFieldUpdateOperationsInput } from "../inputs/EnumSubjectTypeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SubjectUpdateManyMutationInput", {
  isAbstract: true
})
export class SubjectUpdateManyMutationInput {
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
}
