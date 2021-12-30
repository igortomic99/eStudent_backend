import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumRoleWithAggregatesFilter } from "../inputs/EnumRoleWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ProfessorScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ProfessorScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ProfessorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ProfessorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ProfessorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ProfessorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  firstName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  email?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  lastName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  password?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  jmbg?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRoleWithAggregatesFilter, {
    nullable: true
  })
  role?: EnumRoleWithAggregatesFilter | undefined;
}
