import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamCreateOrConnectWithoutExamRecordInput } from "../inputs/ExamCreateOrConnectWithoutExamRecordInput";
import { ExamCreateWithoutExamRecordInput } from "../inputs/ExamCreateWithoutExamRecordInput";
import { ExamWhereUniqueInput } from "../inputs/ExamWhereUniqueInput";

@TypeGraphQL.InputType("ExamCreateNestedOneWithoutExamRecordInput", {
  isAbstract: true
})
export class ExamCreateNestedOneWithoutExamRecordInput {
  @TypeGraphQL.Field(_type => ExamCreateWithoutExamRecordInput, {
    nullable: true
  })
  create?: ExamCreateWithoutExamRecordInput | undefined;

  @TypeGraphQL.Field(_type => ExamCreateOrConnectWithoutExamRecordInput, {
    nullable: true
  })
  connectOrCreate?: ExamCreateOrConnectWithoutExamRecordInput | undefined;

  @TypeGraphQL.Field(_type => ExamWhereUniqueInput, {
    nullable: true
  })
  connect?: ExamWhereUniqueInput | undefined;
}
