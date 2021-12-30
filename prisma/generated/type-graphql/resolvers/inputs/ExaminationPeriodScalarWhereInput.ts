import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ExaminationPeriodScalarWhereInput", {
  isAbstract: true
})
export class ExaminationPeriodScalarWhereInput {
  @TypeGraphQL.Field(_type => [ExaminationPeriodScalarWhereInput], {
    nullable: true
  })
  AND?: ExaminationPeriodScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExaminationPeriodScalarWhereInput], {
    nullable: true
  })
  OR?: ExaminationPeriodScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExaminationPeriodScalarWhereInput], {
    nullable: true
  })
  NOT?: ExaminationPeriodScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  beginningDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  endDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  modulID?: StringNullableFilter | undefined;
}
