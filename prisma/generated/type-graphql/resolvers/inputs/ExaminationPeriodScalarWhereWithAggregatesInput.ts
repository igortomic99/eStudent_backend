import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ExaminationPeriodScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ExaminationPeriodScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ExaminationPeriodScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ExaminationPeriodScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExaminationPeriodScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ExaminationPeriodScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExaminationPeriodScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ExaminationPeriodScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  beginningDate?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  endDate?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  modulID?: StringNullableWithAggregatesFilter | undefined;
}
