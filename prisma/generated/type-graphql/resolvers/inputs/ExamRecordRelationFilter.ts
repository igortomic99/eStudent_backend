import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordWhereInput } from "../inputs/ExamRecordWhereInput";

@TypeGraphQL.InputType("ExamRecordRelationFilter", {
  isAbstract: true
})
export class ExamRecordRelationFilter {
  @TypeGraphQL.Field(_type => ExamRecordWhereInput, {
    nullable: true
  })
  is?: ExamRecordWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExamRecordWhereInput, {
    nullable: true
  })
  isNot?: ExamRecordWhereInput | undefined;
}
