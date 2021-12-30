import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamCreateWithoutExamRecordInput } from "../inputs/ExamCreateWithoutExamRecordInput";
import { ExamWhereUniqueInput } from "../inputs/ExamWhereUniqueInput";

@TypeGraphQL.InputType("ExamCreateOrConnectWithoutExamRecordInput", {
  isAbstract: true
})
export class ExamCreateOrConnectWithoutExamRecordInput {
  @TypeGraphQL.Field(_type => ExamWhereUniqueInput, {
    nullable: false
  })
  where!: ExamWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExamCreateWithoutExamRecordInput, {
    nullable: false
  })
  create!: ExamCreateWithoutExamRecordInput;
}
