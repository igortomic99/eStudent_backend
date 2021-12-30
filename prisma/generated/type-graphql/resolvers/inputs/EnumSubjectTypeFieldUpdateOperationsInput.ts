import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectType } from "../../enums/SubjectType";

@TypeGraphQL.InputType("EnumSubjectTypeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumSubjectTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => SubjectType, {
    nullable: true
  })
  set?: "REQUIRED" | "ELECTIVE" | undefined;
}
