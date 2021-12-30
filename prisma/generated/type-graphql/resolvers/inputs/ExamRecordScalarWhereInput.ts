import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ExamRecordScalarWhereInput", {
  isAbstract: true
})
export class ExamRecordScalarWhereInput {
  @TypeGraphQL.Field(_type => [ExamRecordScalarWhereInput], {
    nullable: true
  })
  AND?: ExamRecordScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamRecordScalarWhereInput], {
    nullable: true
  })
  OR?: ExamRecordScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamRecordScalarWhereInput], {
    nullable: true
  })
  NOT?: ExamRecordScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  gradeID?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  examID?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  studentID?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  singed?: BoolFilter | undefined;
}
