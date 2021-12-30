import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ModulScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ModulScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ModulScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ModulScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ModulScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ModulScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ModulScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ModulScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  moduleName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  moduleCode?: StringWithAggregatesFilter | undefined;
}
