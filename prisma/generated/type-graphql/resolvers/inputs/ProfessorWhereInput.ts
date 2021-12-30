import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumRoleFilter } from "../inputs/EnumRoleFilter";
import { StringFilter } from "../inputs/StringFilter";
import { SubjectListRelationFilter } from "../inputs/SubjectListRelationFilter";

@TypeGraphQL.InputType("ProfessorWhereInput", {
  isAbstract: true
})
export class ProfessorWhereInput {
  @TypeGraphQL.Field(_type => [ProfessorWhereInput], {
    nullable: true
  })
  AND?: ProfessorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorWhereInput], {
    nullable: true
  })
  OR?: ProfessorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorWhereInput], {
    nullable: true
  })
  NOT?: ProfessorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  firstName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  lastName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => SubjectListRelationFilter, {
    nullable: true
  })
  subjects?: SubjectListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  jmbg?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRoleFilter, {
    nullable: true
  })
  role?: EnumRoleFilter | undefined;
}
