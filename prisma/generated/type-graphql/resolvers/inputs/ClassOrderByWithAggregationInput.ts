import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClassAvgOrderByAggregateInput } from "../inputs/ClassAvgOrderByAggregateInput";
import { ClassCountOrderByAggregateInput } from "../inputs/ClassCountOrderByAggregateInput";
import { ClassMaxOrderByAggregateInput } from "../inputs/ClassMaxOrderByAggregateInput";
import { ClassMinOrderByAggregateInput } from "../inputs/ClassMinOrderByAggregateInput";
import { ClassSumOrderByAggregateInput } from "../inputs/ClassSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ClassOrderByWithAggregationInput", {
  isAbstract: true
})
export class ClassOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  classLabel?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ClassCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ClassCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ClassAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ClassAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ClassMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ClassMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ClassMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ClassMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ClassSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ClassSumOrderByAggregateInput | undefined;
}
