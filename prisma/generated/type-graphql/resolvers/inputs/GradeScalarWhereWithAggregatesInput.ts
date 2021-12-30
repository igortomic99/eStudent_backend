import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("GradeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class GradeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [GradeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: GradeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GradeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: GradeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GradeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: GradeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  value?: IntWithAggregatesFilter | undefined;
}
