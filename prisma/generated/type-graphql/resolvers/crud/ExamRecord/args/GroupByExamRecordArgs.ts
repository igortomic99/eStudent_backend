import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExamRecordOrderByWithAggregationInput } from "../../../inputs/ExamRecordOrderByWithAggregationInput";
import { ExamRecordScalarWhereWithAggregatesInput } from "../../../inputs/ExamRecordScalarWhereWithAggregatesInput";
import { ExamRecordWhereInput } from "../../../inputs/ExamRecordWhereInput";
import { ExamRecordScalarFieldEnum } from "../../../../enums/ExamRecordScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByExamRecordArgs {
  @TypeGraphQL.Field(_type => ExamRecordWhereInput, {
    nullable: true
  })
  where?: ExamRecordWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExamRecordOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ExamRecordOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamRecordScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "points" | "passed" | "gradeID" | "examID" | "studentID" | "singed">;

  @TypeGraphQL.Field(_type => ExamRecordScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ExamRecordScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
