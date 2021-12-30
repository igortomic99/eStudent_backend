import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordCreateWithoutStudentInput } from "../inputs/ExamRecordCreateWithoutStudentInput";
import { ExamRecordUpdateWithoutStudentInput } from "../inputs/ExamRecordUpdateWithoutStudentInput";
import { ExamRecordWhereUniqueInput } from "../inputs/ExamRecordWhereUniqueInput";

@TypeGraphQL.InputType("ExamRecordUpsertWithWhereUniqueWithoutStudentInput", {
  isAbstract: true
})
export class ExamRecordUpsertWithWhereUniqueWithoutStudentInput {
  @TypeGraphQL.Field(_type => ExamRecordWhereUniqueInput, {
    nullable: false
  })
  where!: ExamRecordWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExamRecordUpdateWithoutStudentInput, {
    nullable: false
  })
  update!: ExamRecordUpdateWithoutStudentInput;

  @TypeGraphQL.Field(_type => ExamRecordCreateWithoutStudentInput, {
    nullable: false
  })
  create!: ExamRecordCreateWithoutStudentInput;
}
