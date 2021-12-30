import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamCountOrderByAggregateInput } from "../inputs/ExamCountOrderByAggregateInput";
import { ExamMaxOrderByAggregateInput } from "../inputs/ExamMaxOrderByAggregateInput";
import { ExamMinOrderByAggregateInput } from "../inputs/ExamMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExamOrderByWithAggregationInput", {
  isAbstract: true
})
export class ExamOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  subjectID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  exPeriodID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExamCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ExamCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExamMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ExamMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExamMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ExamMinOrderByAggregateInput | undefined;
}
