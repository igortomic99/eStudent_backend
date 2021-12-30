import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordCreateManyStudentInputEnvelope } from "../inputs/ExamRecordCreateManyStudentInputEnvelope";
import { ExamRecordCreateOrConnectWithoutStudentInput } from "../inputs/ExamRecordCreateOrConnectWithoutStudentInput";
import { ExamRecordCreateWithoutStudentInput } from "../inputs/ExamRecordCreateWithoutStudentInput";
import { ExamRecordWhereUniqueInput } from "../inputs/ExamRecordWhereUniqueInput";

@TypeGraphQL.InputType("ExamRecordCreateNestedManyWithoutStudentInput", {
  isAbstract: true
})
export class ExamRecordCreateNestedManyWithoutStudentInput {
  @TypeGraphQL.Field(_type => [ExamRecordCreateWithoutStudentInput], {
    nullable: true
  })
  create?: ExamRecordCreateWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamRecordCreateOrConnectWithoutStudentInput], {
    nullable: true
  })
  connectOrCreate?: ExamRecordCreateOrConnectWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => ExamRecordCreateManyStudentInputEnvelope, {
    nullable: true
  })
  createMany?: ExamRecordCreateManyStudentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExamRecordWhereUniqueInput], {
    nullable: true
  })
  connect?: ExamRecordWhereUniqueInput[] | undefined;
}
