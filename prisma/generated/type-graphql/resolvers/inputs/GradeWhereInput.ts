import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordRelationFilter } from "../inputs/ExamRecordRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GradeWhereInput", {
  isAbstract: true
})
export class GradeWhereInput {
  @TypeGraphQL.Field(_type => [GradeWhereInput], {
    nullable: true
  })
  AND?: GradeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GradeWhereInput], {
    nullable: true
  })
  OR?: GradeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GradeWhereInput], {
    nullable: true
  })
  NOT?: GradeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  value?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ExamRecordRelationFilter, {
    nullable: true
  })
  exam?: ExamRecordRelationFilter | undefined;
}
