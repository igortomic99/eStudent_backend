import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordCreateWithoutGradeInput } from "../inputs/ExamRecordCreateWithoutGradeInput";
import { ExamRecordUpdateWithoutGradeInput } from "../inputs/ExamRecordUpdateWithoutGradeInput";

@TypeGraphQL.InputType("ExamRecordUpsertWithoutGradeInput", {
  isAbstract: true
})
export class ExamRecordUpsertWithoutGradeInput {
  @TypeGraphQL.Field(_type => ExamRecordUpdateWithoutGradeInput, {
    nullable: false
  })
  update!: ExamRecordUpdateWithoutGradeInput;

  @TypeGraphQL.Field(_type => ExamRecordCreateWithoutGradeInput, {
    nullable: false
  })
  create!: ExamRecordCreateWithoutGradeInput;
}
