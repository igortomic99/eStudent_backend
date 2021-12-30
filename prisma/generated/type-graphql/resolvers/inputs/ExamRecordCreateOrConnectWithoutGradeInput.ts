import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordCreateWithoutGradeInput } from "../inputs/ExamRecordCreateWithoutGradeInput";
import { ExamRecordWhereUniqueInput } from "../inputs/ExamRecordWhereUniqueInput";

@TypeGraphQL.InputType("ExamRecordCreateOrConnectWithoutGradeInput", {
  isAbstract: true
})
export class ExamRecordCreateOrConnectWithoutGradeInput {
  @TypeGraphQL.Field(_type => ExamRecordWhereUniqueInput, {
    nullable: false
  })
  where!: ExamRecordWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExamRecordCreateWithoutGradeInput, {
    nullable: false
  })
  create!: ExamRecordCreateWithoutGradeInput;
}
