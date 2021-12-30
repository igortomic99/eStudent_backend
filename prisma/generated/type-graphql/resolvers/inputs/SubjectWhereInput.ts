import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumSubjectTypeFilter } from "../inputs/EnumSubjectTypeFilter";
import { ExamRelationFilter } from "../inputs/ExamRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ModulRelationFilter } from "../inputs/ModulRelationFilter";
import { ProfessorRelationFilter } from "../inputs/ProfessorRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SubjectWhereInput", {
  isAbstract: true
})
export class SubjectWhereInput {
  @TypeGraphQL.Field(_type => [SubjectWhereInput], {
    nullable: true
  })
  AND?: SubjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectWhereInput], {
    nullable: true
  })
  OR?: SubjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectWhereInput], {
    nullable: true
  })
  NOT?: SubjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  subjectName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  espp?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ProfessorRelationFilter, {
    nullable: true
  })
  professor?: ProfessorRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  professorID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ExamRelationFilter, {
    nullable: true
  })
  exam?: ExamRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EnumSubjectTypeFilter, {
    nullable: true
  })
  type?: EnumSubjectTypeFilter | undefined;

  @TypeGraphQL.Field(_type => ModulRelationFilter, {
    nullable: true
  })
  modul?: ModulRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  modulID?: StringFilter | undefined;
}
