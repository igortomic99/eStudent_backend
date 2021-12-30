import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ExamRecordWhereUniqueInput", {
  isAbstract: true
})
export class ExamRecordWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  gradeID?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  examID?: string | undefined;
}