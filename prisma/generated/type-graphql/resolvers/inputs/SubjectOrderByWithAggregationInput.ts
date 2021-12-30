import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectAvgOrderByAggregateInput } from "../inputs/SubjectAvgOrderByAggregateInput";
import { SubjectCountOrderByAggregateInput } from "../inputs/SubjectCountOrderByAggregateInput";
import { SubjectMaxOrderByAggregateInput } from "../inputs/SubjectMaxOrderByAggregateInput";
import { SubjectMinOrderByAggregateInput } from "../inputs/SubjectMinOrderByAggregateInput";
import { SubjectSumOrderByAggregateInput } from "../inputs/SubjectSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SubjectOrderByWithAggregationInput", {
  isAbstract: true
})
export class SubjectOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  subjectName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  espp?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  professorID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  modulID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SubjectCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SubjectCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubjectAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SubjectAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubjectMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SubjectMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubjectMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SubjectMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubjectSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SubjectSumOrderByAggregateInput | undefined;
}
