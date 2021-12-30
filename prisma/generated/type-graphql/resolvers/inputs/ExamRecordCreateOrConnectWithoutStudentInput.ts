import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordCreateWithoutStudentInput } from "../inputs/ExamRecordCreateWithoutStudentInput";
import { ExamRecordWhereUniqueInput } from "../inputs/ExamRecordWhereUniqueInput";

@TypeGraphQL.InputType("ExamRecordCreateOrConnectWithoutStudentInput", {
  isAbstract: true
})
export class ExamRecordCreateOrConnectWithoutStudentInput {
  @TypeGraphQL.Field(_type => ExamRecordWhereUniqueInput, {
    nullable: false
  })
  where!: ExamRecordWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExamRecordCreateWithoutStudentInput, {
    nullable: false
  })
  create!: ExamRecordCreateWithoutStudentInput;
}
