import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ExamScalarWhereInput", {
  isAbstract: true
})
export class ExamScalarWhereInput {
  @TypeGraphQL.Field(_type => [ExamScalarWhereInput], {
    nullable: true
  })
  AND?: ExamScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamScalarWhereInput], {
    nullable: true
  })
  OR?: ExamScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamScalarWhereInput], {
    nullable: true
  })
  NOT?: ExamScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  subjectID?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  exPeriodID?: StringNullableFilter | undefined;
}
