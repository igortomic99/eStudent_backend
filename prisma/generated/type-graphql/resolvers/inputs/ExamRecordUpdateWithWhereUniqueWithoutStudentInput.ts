import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordUpdateWithoutStudentInput } from "../inputs/ExamRecordUpdateWithoutStudentInput";
import { ExamRecordWhereUniqueInput } from "../inputs/ExamRecordWhereUniqueInput";

@TypeGraphQL.InputType("ExamRecordUpdateWithWhereUniqueWithoutStudentInput", {
  isAbstract: true
})
export class ExamRecordUpdateWithWhereUniqueWithoutStudentInput {
  @TypeGraphQL.Field(_type => ExamRecordWhereUniqueInput, {
    nullable: false
  })
  where!: ExamRecordWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExamRecordUpdateWithoutStudentInput, {
    nullable: false
  })
  data!: ExamRecordUpdateWithoutStudentInput;
}
