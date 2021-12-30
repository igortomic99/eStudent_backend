import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumSubjectTypeFilter } from "../inputs/NestedEnumSubjectTypeFilter";
import { SubjectType } from "../../enums/SubjectType";

@TypeGraphQL.InputType("EnumSubjectTypeFilter", {
  isAbstract: true
})
export class EnumSubjectTypeFilter {
  @TypeGraphQL.Field(_type => SubjectType, {
    nullable: true
  })
  equals?: "REQUIRED" | "ELECTIVE" | undefined;

  @TypeGraphQL.Field(_type => [SubjectType], {
    nullable: true
  })
  in?: Array<"REQUIRED" | "ELECTIVE"> | undefined;

  @TypeGraphQL.Field(_type => [SubjectType], {
    nullable: true
  })
  notIn?: Array<"REQUIRED" | "ELECTIVE"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSubjectTypeFilter, {
    nullable: true
  })
  not?: NestedEnumSubjectTypeFilter | undefined;
}
