import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ClassScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ClassScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ClassScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ClassScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClassScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ClassScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClassScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ClassScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  classLabel?: IntWithAggregatesFilter | undefined;
}
