import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClassRelationFilter } from "../inputs/ClassRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumRoleFilter } from "../inputs/EnumRoleFilter";
import { ExamRecordListRelationFilter } from "../inputs/ExamRecordListRelationFilter";
import { ModulRelationFilter } from "../inputs/ModulRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("StudentWhereInput", {
  isAbstract: true
})
export class StudentWhereInput {
  @TypeGraphQL.Field(_type => [StudentWhereInput], {
    nullable: true
  })
  AND?: StudentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentWhereInput], {
    nullable: true
  })
  OR?: StudentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentWhereInput], {
    nullable: true
  })
  NOT?: StudentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  firstName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  middleName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  lastName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  jmbg?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  brind?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  birthDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRoleFilter, {
    nullable: true
  })
  role?: EnumRoleFilter | undefined;

  @TypeGraphQL.Field(_type => ModulRelationFilter, {
    nullable: true
  })
  modul?: ModulRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  modulID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ClassRelationFilter, {
    nullable: true
  })
  class?: ClassRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  classID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ExamRecordListRelationFilter, {
    nullable: true
  })
  exams?: ExamRecordListRelationFilter | undefined;
}
