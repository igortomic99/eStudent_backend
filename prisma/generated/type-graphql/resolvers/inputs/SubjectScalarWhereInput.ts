import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumSubjectTypeFilter } from "../inputs/EnumSubjectTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SubjectScalarWhereInput", {
  isAbstract: true
})
export class SubjectScalarWhereInput {
  @TypeGraphQL.Field(_type => [SubjectScalarWhereInput], {
    nullable: true
  })
  AND?: SubjectScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectScalarWhereInput], {
    nullable: true
  })
  OR?: SubjectScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectScalarWhereInput], {
    nullable: true
  })
  NOT?: SubjectScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  professorID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumSubjectTypeFilter, {
    nullable: true
  })
  type?: EnumSubjectTypeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  modulID?: StringFilter | undefined;
}
