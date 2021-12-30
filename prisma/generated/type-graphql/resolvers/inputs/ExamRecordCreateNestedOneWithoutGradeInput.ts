import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordCreateOrConnectWithoutGradeInput } from "../inputs/ExamRecordCreateOrConnectWithoutGradeInput";
import { ExamRecordCreateWithoutGradeInput } from "../inputs/ExamRecordCreateWithoutGradeInput";
import { ExamRecordWhereUniqueInput } from "../inputs/ExamRecordWhereUniqueInput";

@TypeGraphQL.InputType("ExamRecordCreateNestedOneWithoutGradeInput", {
  isAbstract: true
})
export class ExamRecordCreateNestedOneWithoutGradeInput {
  @TypeGraphQL.Field(_type => ExamRecordCreateWithoutGradeInput, {
    nullable: true
  })
  create?: ExamRecordCreateWithoutGradeInput | undefined;

  @TypeGraphQL.Field(_type => ExamRecordCreateOrConnectWithoutGradeInput, {
    nullable: true
  })
  connectOrCreate?: ExamRecordCreateOrConnectWithoutGradeInput | undefined;

  @TypeGraphQL.Field(_type => ExamRecordWhereUniqueInput, {
    nullable: true
  })
  connect?: ExamRecordWhereUniqueInput | undefined;
}
