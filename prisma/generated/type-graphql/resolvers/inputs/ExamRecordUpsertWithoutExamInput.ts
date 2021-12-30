import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordCreateWithoutExamInput } from "../inputs/ExamRecordCreateWithoutExamInput";
import { ExamRecordUpdateWithoutExamInput } from "../inputs/ExamRecordUpdateWithoutExamInput";

@TypeGraphQL.InputType("ExamRecordUpsertWithoutExamInput", {
  isAbstract: true
})
export class ExamRecordUpsertWithoutExamInput {
  @TypeGraphQL.Field(_type => ExamRecordUpdateWithoutExamInput, {
    nullable: false
  })
  update!: ExamRecordUpdateWithoutExamInput;

  @TypeGraphQL.Field(_type => ExamRecordCreateWithoutExamInput, {
    nullable: false
  })
  create!: ExamRecordCreateWithoutExamInput;
}
