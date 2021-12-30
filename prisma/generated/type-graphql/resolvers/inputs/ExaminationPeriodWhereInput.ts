import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ExamListRelationFilter } from "../inputs/ExamListRelationFilter";
import { ModulRelationFilter } from "../inputs/ModulRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ExaminationPeriodWhereInput", {
  isAbstract: true
})
export class ExaminationPeriodWhereInput {
  @TypeGraphQL.Field(_type => [ExaminationPeriodWhereInput], {
    nullable: true
  })
  AND?: ExaminationPeriodWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExaminationPeriodWhereInput], {
    nullable: true
  })
  OR?: ExaminationPeriodWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExaminationPeriodWhereInput], {
    nullable: true
  })
  NOT?: ExaminationPeriodWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  beginningDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  endDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => ModulRelationFilter, {
    nullable: true
  })
  modul?: ModulRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  modulID?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ExamListRelationFilter, {
    nullable: true
  })
  exams?: ExamListRelationFilter | undefined;
}
