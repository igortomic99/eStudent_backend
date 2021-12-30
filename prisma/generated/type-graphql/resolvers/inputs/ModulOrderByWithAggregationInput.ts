import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModulCountOrderByAggregateInput } from "../inputs/ModulCountOrderByAggregateInput";
import { ModulMaxOrderByAggregateInput } from "../inputs/ModulMaxOrderByAggregateInput";
import { ModulMinOrderByAggregateInput } from "../inputs/ModulMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ModulOrderByWithAggregationInput", {
  isAbstract: true
})
export class ModulOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  moduleName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  moduleCode?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ModulCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ModulCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ModulMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ModulMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ModulMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ModulMinOrderByAggregateInput | undefined;
}
