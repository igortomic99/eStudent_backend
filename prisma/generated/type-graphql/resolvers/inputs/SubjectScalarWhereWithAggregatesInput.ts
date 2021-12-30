import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumSubjectTypeWithAggregatesFilter } from "../inputs/EnumSubjectTypeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SubjectScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SubjectScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SubjectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SubjectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SubjectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SubjectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  subjectName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  espp?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  professorID?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumSubjectTypeWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumSubjectTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  modulID?: StringWithAggregatesFilter | undefined;
}
