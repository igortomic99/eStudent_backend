import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorCountOrderByAggregateInput } from "../inputs/ProfessorCountOrderByAggregateInput";
import { ProfessorMaxOrderByAggregateInput } from "../inputs/ProfessorMaxOrderByAggregateInput";
import { ProfessorMinOrderByAggregateInput } from "../inputs/ProfessorMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProfessorOrderByWithAggregationInput", {
  isAbstract: true
})
export class ProfessorOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  firstName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

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
  role?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProfessorCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProfessorCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProfessorMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProfessorMinOrderByAggregateInput | undefined;
}
