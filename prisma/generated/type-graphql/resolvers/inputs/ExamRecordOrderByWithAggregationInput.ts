import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordAvgOrderByAggregateInput } from "../inputs/ExamRecordAvgOrderByAggregateInput";
import { ExamRecordCountOrderByAggregateInput } from "../inputs/ExamRecordCountOrderByAggregateInput";
import { ExamRecordMaxOrderByAggregateInput } from "../inputs/ExamRecordMaxOrderByAggregateInput";
import { ExamRecordMinOrderByAggregateInput } from "../inputs/ExamRecordMinOrderByAggregateInput";
import { ExamRecordSumOrderByAggregateInput } from "../inputs/ExamRecordSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExamRecordOrderByWithAggregationInput", {
  isAbstract: true
})
export class ExamRecordOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  points?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  passed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  gradeID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  examID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  studentID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  singed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExamRecordCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ExamRecordCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExamRecordAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ExamRecordAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExamRecordMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ExamRecordMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExamRecordMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ExamRecordMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExamRecordSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ExamRecordSumOrderByAggregateInput | undefined;
}
