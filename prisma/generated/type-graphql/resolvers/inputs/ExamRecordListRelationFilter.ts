import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordWhereInput } from "../inputs/ExamRecordWhereInput";

@TypeGraphQL.InputType("ExamRecordListRelationFilter", {
  isAbstract: true
})
export class ExamRecordListRelationFilter {
  @TypeGraphQL.Field(_type => ExamRecordWhereInput, {
    nullable: true
  })
  every?: ExamRecordWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExamRecordWhereInput, {
    nullable: true
  })
  some?: ExamRecordWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExamRecordWhereInput, {
    nullable: true
  })
  none?: ExamRecordWhereInput | undefined;
}
