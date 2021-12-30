import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ExamRecordRelationFilter } from "../inputs/ExamRecordRelationFilter";
import { ExaminationPeriodRelationFilter } from "../inputs/ExaminationPeriodRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { SubjectRelationFilter } from "../inputs/SubjectRelationFilter";

@TypeGraphQL.InputType("ExamWhereInput", {
  isAbstract: true
})
export class ExamWhereInput {
  @TypeGraphQL.Field(_type => [ExamWhereInput], {
    nullable: true
  })
  AND?: ExamWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamWhereInput], {
    nullable: true
  })
  OR?: ExamWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamWhereInput], {
    nullable: true
  })
  NOT?: ExamWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => SubjectRelationFilter, {
    nullable: true
  })
  subject?: SubjectRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  subjectID?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ExaminationPeriodRelationFilter, {
    nullable: true
  })
  examinationPeriod?: ExaminationPeriodRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  exPeriodID?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ExamRecordRelationFilter, {
    nullable: true
  })
  examRecord?: ExamRecordRelationFilter | undefined;
}
