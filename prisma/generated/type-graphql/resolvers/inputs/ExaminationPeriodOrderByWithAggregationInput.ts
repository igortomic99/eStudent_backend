import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExaminationPeriodCountOrderByAggregateInput } from "../inputs/ExaminationPeriodCountOrderByAggregateInput";
import { ExaminationPeriodMaxOrderByAggregateInput } from "../inputs/ExaminationPeriodMaxOrderByAggregateInput";
import { ExaminationPeriodMinOrderByAggregateInput } from "../inputs/ExaminationPeriodMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExaminationPeriodOrderByWithAggregationInput", {
  isAbstract: true
})
export class ExaminationPeriodOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  beginningDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  endDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  modulID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExaminationPeriodCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ExaminationPeriodCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExaminationPeriodMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ExaminationPeriodMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExaminationPeriodMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ExaminationPeriodMinOrderByAggregateInput | undefined;
}
