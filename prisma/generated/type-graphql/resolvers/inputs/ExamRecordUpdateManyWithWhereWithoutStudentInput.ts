import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordScalarWhereInput } from "../inputs/ExamRecordScalarWhereInput";
import { ExamRecordUpdateManyMutationInput } from "../inputs/ExamRecordUpdateManyMutationInput";

@TypeGraphQL.InputType("ExamRecordUpdateManyWithWhereWithoutStudentInput", {
  isAbstract: true
})
export class ExamRecordUpdateManyWithWhereWithoutStudentInput {
  @TypeGraphQL.Field(_type => ExamRecordScalarWhereInput, {
    nullable: false
  })
  where!: ExamRecordScalarWhereInput;

  @TypeGraphQL.Field(_type => ExamRecordUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExamRecordUpdateManyMutationInput;
}
