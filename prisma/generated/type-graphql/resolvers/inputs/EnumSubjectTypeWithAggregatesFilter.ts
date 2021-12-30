import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumSubjectTypeFilter } from "../inputs/NestedEnumSubjectTypeFilter";
import { NestedEnumSubjectTypeWithAggregatesFilter } from "../inputs/NestedEnumSubjectTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { SubjectType } from "../../enums/SubjectType";

@TypeGraphQL.InputType("EnumSubjectTypeWithAggregatesFilter", {
  isAbstract: true
})
export class EnumSubjectTypeWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumSubjectTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumSubjectTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSubjectTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumSubjectTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSubjectTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumSubjectTypeFilter | undefined;
}
