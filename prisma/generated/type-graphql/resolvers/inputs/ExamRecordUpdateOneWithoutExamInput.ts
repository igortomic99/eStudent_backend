import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordCreateOrConnectWithoutExamInput } from "../inputs/ExamRecordCreateOrConnectWithoutExamInput";
import { ExamRecordCreateWithoutExamInput } from "../inputs/ExamRecordCreateWithoutExamInput";
import { ExamRecordUpdateWithoutExamInput } from "../inputs/ExamRecordUpdateWithoutExamInput";
import { ExamRecordUpsertWithoutExamInput } from "../inputs/ExamRecordUpsertWithoutExamInput";
import { ExamRecordWhereUniqueInput } from "../inputs/ExamRecordWhereUniqueInput";

@TypeGraphQL.InputType("ExamRecordUpdateOneWithoutExamInput", {
  isAbstract: true
})
export class ExamRecordUpdateOneWithoutExamInput {
  @TypeGraphQL.Field(_type => ExamRecordCreateWithoutExamInput, {
    nullable: true
  })
  create?: ExamRecordCreateWithoutExamInput | undefined;

  @TypeGraphQL.Field(_type => ExamRecordCreateOrConnectWithoutExamInput, {
    nullable: true
  })
  connectOrCreate?: ExamRecordCreateOrConnectWithoutExamInput | undefined;

  @TypeGraphQL.Field(_type => ExamRecordUpsertWithoutExamInput, {
    nullable: true
  })
  upsert?: ExamRecordUpsertWithoutExamInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ExamRecordWhereUniqueInput, {
    nullable: true
  })
  connect?: ExamRecordWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ExamRecordUpdateWithoutExamInput, {
    nullable: true
  })
  update?: ExamRecordUpdateWithoutExamInput | undefined;
}
