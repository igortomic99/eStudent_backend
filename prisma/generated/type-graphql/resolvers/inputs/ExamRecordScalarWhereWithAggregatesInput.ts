import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ExamRecordScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ExamRecordScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ExamRecordScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ExamRecordScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamRecordScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ExamRecordScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamRecordScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ExamRecordScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  points?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  passed?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  gradeID?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  examID?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  studentID?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  singed?: BoolWithAggregatesFilter | undefined;
}
