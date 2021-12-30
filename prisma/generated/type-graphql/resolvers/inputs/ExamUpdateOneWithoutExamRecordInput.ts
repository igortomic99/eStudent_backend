import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamCreateOrConnectWithoutExamRecordInput } from "../inputs/ExamCreateOrConnectWithoutExamRecordInput";
import { ExamCreateWithoutExamRecordInput } from "../inputs/ExamCreateWithoutExamRecordInput";
import { ExamUpdateWithoutExamRecordInput } from "../inputs/ExamUpdateWithoutExamRecordInput";
import { ExamUpsertWithoutExamRecordInput } from "../inputs/ExamUpsertWithoutExamRecordInput";
import { ExamWhereUniqueInput } from "../inputs/ExamWhereUniqueInput";

@TypeGraphQL.InputType("ExamUpdateOneWithoutExamRecordInput", {
  isAbstract: true
})
export class ExamUpdateOneWithoutExamRecordInput {
  @TypeGraphQL.Field(_type => ExamCreateWithoutExamRecordInput, {
    nullable: true
  })
  create?: ExamCreateWithoutExamRecordInput | undefined;

  @TypeGraphQL.Field(_type => ExamCreateOrConnectWithoutExamRecordInput, {
    nullable: true
  })
  connectOrCreate?: ExamCreateOrConnectWithoutExamRecordInput | undefined;

  @TypeGraphQL.Field(_type => ExamUpsertWithoutExamRecordInput, {
    nullable: true
  })
  upsert?: ExamUpsertWithoutExamRecordInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ExamWhereUniqueInput, {
    nullable: true
  })
  connect?: ExamWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ExamUpdateWithoutExamRecordInput, {
    nullable: true
  })
  update?: ExamUpdateWithoutExamRecordInput | undefined;
}
