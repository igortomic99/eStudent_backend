import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExaminationPeriodListRelationFilter } from "../inputs/ExaminationPeriodListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StudentListRelationFilter } from "../inputs/StudentListRelationFilter";
import { SubjectListRelationFilter } from "../inputs/SubjectListRelationFilter";

@TypeGraphQL.InputType("ModulWhereInput", {
  isAbstract: true
})
export class ModulWhereInput {
  @TypeGraphQL.Field(_type => [ModulWhereInput], {
    nullable: true
  })
  AND?: ModulWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ModulWhereInput], {
    nullable: true
  })
  OR?: ModulWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ModulWhereInput], {
    nullable: true
  })
  NOT?: ModulWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  moduleName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  moduleCode?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StudentListRelationFilter, {
    nullable: true
  })
  students?: StudentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SubjectListRelationFilter, {
    nullable: true
  })
  subjects?: SubjectListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ExaminationPeriodListRelationFilter, {
    nullable: true
  })
  examinationPeriod?: ExaminationPeriodListRelationFilter | undefined;
}
