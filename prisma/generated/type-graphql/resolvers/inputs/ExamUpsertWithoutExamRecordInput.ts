import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamCreateWithoutExamRecordInput } from "../inputs/ExamCreateWithoutExamRecordInput";
import { ExamUpdateWithoutExamRecordInput } from "../inputs/ExamUpdateWithoutExamRecordInput";

@TypeGraphQL.InputType("ExamUpsertWithoutExamRecordInput", {
  isAbstract: true
})
export class ExamUpsertWithoutExamRecordInput {
  @TypeGraphQL.Field(_type => ExamUpdateWithoutExamRecordInput, {
    nullable: false
  })
  update!: ExamUpdateWithoutExamRecordInput;

  @TypeGraphQL.Field(_type => ExamCreateWithoutExamRecordInput, {
    nullable: false
  })
  create!: ExamCreateWithoutExamRecordInput;
}
