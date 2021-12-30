import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCountOrderByAggregateInput } from "../inputs/StudentCountOrderByAggregateInput";
import { StudentMaxOrderByAggregateInput } from "../inputs/StudentMaxOrderByAggregateInput";
import { StudentMinOrderByAggregateInput } from "../inputs/StudentMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StudentOrderByWithAggregationInput", {
  isAbstract: true
})
export class StudentOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  firstName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  middleName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lastName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  jmbg?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  brind?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  birthDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  role?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  modulID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  classID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StudentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: StudentCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StudentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: StudentMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StudentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: StudentMinOrderByAggregateInput | undefined;
}
