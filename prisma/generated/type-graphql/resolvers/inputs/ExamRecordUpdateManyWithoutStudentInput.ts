import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordCreateManyStudentInputEnvelope } from "../inputs/ExamRecordCreateManyStudentInputEnvelope";
import { ExamRecordCreateOrConnectWithoutStudentInput } from "../inputs/ExamRecordCreateOrConnectWithoutStudentInput";
import { ExamRecordCreateWithoutStudentInput } from "../inputs/ExamRecordCreateWithoutStudentInput";
import { ExamRecordScalarWhereInput } from "../inputs/ExamRecordScalarWhereInput";
import { ExamRecordUpdateManyWithWhereWithoutStudentInput } from "../inputs/ExamRecordUpdateManyWithWhereWithoutStudentInput";
import { ExamRecordUpdateWithWhereUniqueWithoutStudentInput } from "../inputs/ExamRecordUpdateWithWhereUniqueWithoutStudentInput";
import { ExamRecordUpsertWithWhereUniqueWithoutStudentInput } from "../inputs/ExamRecordUpsertWithWhereUniqueWithoutStudentInput";
import { ExamRecordWhereUniqueInput } from "../inputs/ExamRecordWhereUniqueInput";

@TypeGraphQL.InputType("ExamRecordUpdateManyWithoutStudentInput", {
  isAbstract: true
})
export class ExamRecordUpdateManyWithoutStudentInput {
  @TypeGraphQL.Field(_type => [ExamRecordCreateWithoutStudentInput], {
    nullable: true
  })
  create?: ExamRecordCreateWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamRecordCreateOrConnectWithoutStudentInput], {
    nullable: true
  })
  connectOrCreate?: ExamRecordCreateOrConnectWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamRecordUpsertWithWhereUniqueWithoutStudentInput], {
    nullable: true
  })
  upsert?: ExamRecordUpsertWithWhereUniqueWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => ExamRecordCreateManyStudentInputEnvelope, {
    nullable: true
  })
  createMany?: ExamRecordCreateManyStudentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExamRecordWhereUniqueInput], {
    nullable: true
  })
  set?: ExamRecordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamRecordWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ExamRecordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamRecordWhereUniqueInput], {
    nullable: true
  })
  delete?: ExamRecordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamRecordWhereUniqueInput], {
    nullable: true
  })
  connect?: ExamRecordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamRecordUpdateWithWhereUniqueWithoutStudentInput], {
    nullable: true
  })
  update?: ExamRecordUpdateWithWhereUniqueWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamRecordUpdateManyWithWhereWithoutStudentInput], {
    nullable: true
  })
  updateMany?: ExamRecordUpdateManyWithWhereWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamRecordScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ExamRecordScalarWhereInput[] | undefined;
}
