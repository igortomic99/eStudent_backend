import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ExamScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ExamScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ExamScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ExamScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ExamScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ExamScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  date?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  subjectID?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  exPeriodID?: StringNullableWithAggregatesFilter | undefined;
}
