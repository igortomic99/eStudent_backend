import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { ExamRelationFilter } from "../inputs/ExamRelationFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { GradeRelationFilter } from "../inputs/GradeRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StudentRelationFilter } from "../inputs/StudentRelationFilter";

@TypeGraphQL.InputType("ExamRecordWhereInput", {
  isAbstract: true
})
export class ExamRecordWhereInput {
  @TypeGraphQL.Field(_type => [ExamRecordWhereInput], {
    nullable: true
  })
  AND?: ExamRecordWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamRecordWhereInput], {
    nullable: true
  })
  OR?: ExamRecordWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamRecordWhereInput], {
    nullable: true
  })
  NOT?: ExamRecordWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  points?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  passed?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => GradeRelationFilter, {
    nullable: true
  })
  grade?: GradeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  gradeID?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ExamRelationFilter, {
    nullable: true
  })
  exam?: ExamRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  examID?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StudentRelationFilter, {
    nullable: true
  })
  student?: StudentRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  studentID?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  singed?: BoolFilter | undefined;
}
