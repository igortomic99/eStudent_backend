import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GradeAvgOrderByAggregateInput } from "../inputs/GradeAvgOrderByAggregateInput";
import { GradeCountOrderByAggregateInput } from "../inputs/GradeCountOrderByAggregateInput";
import { GradeMaxOrderByAggregateInput } from "../inputs/GradeMaxOrderByAggregateInput";
import { GradeMinOrderByAggregateInput } from "../inputs/GradeMinOrderByAggregateInput";
import { GradeSumOrderByAggregateInput } from "../inputs/GradeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GradeOrderByWithAggregationInput", {
  isAbstract: true
})
export class GradeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GradeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GradeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GradeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: GradeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GradeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GradeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GradeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GradeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GradeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: GradeSumOrderByAggregateInput | undefined;
}
