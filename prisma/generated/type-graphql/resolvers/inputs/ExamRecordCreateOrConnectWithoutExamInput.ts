import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordCreateWithoutExamInput } from "../inputs/ExamRecordCreateWithoutExamInput";
import { ExamRecordWhereUniqueInput } from "../inputs/ExamRecordWhereUniqueInput";

@TypeGraphQL.InputType("ExamRecordCreateOrConnectWithoutExamInput", {
  isAbstract: true
})
export class ExamRecordCreateOrConnectWithoutExamInput {
  @TypeGraphQL.Field(_type => ExamRecordWhereUniqueInput, {
    nullable: false
  })
  where!: ExamRecordWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExamRecordCreateWithoutExamInput, {
    nullable: false
  })
  create!: ExamRecordCreateWithoutExamInput;
}
