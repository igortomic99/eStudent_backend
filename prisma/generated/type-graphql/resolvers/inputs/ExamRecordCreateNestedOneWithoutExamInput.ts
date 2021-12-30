import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordCreateOrConnectWithoutExamInput } from "../inputs/ExamRecordCreateOrConnectWithoutExamInput";
import { ExamRecordCreateWithoutExamInput } from "../inputs/ExamRecordCreateWithoutExamInput";
import { ExamRecordWhereUniqueInput } from "../inputs/ExamRecordWhereUniqueInput";

@TypeGraphQL.InputType("ExamRecordCreateNestedOneWithoutExamInput", {
  isAbstract: true
})
export class ExamRecordCreateNestedOneWithoutExamInput {
  @TypeGraphQL.Field(_type => ExamRecordCreateWithoutExamInput, {
    nullable: true
  })
  create?: ExamRecordCreateWithoutExamInput | undefined;

  @TypeGraphQL.Field(_type => ExamRecordCreateOrConnectWithoutExamInput, {
    nullable: true
  })
  connectOrCreate?: ExamRecordCreateOrConnectWithoutExamInput | undefined;

  @TypeGraphQL.Field(_type => ExamRecordWhereUniqueInput, {
    nullable: true
  })
  connect?: ExamRecordWhereUniqueInput | undefined;
}
