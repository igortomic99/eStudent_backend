import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamRecordCreateOrConnectWithoutGradeInput } from "../inputs/ExamRecordCreateOrConnectWithoutGradeInput";
import { ExamRecordCreateWithoutGradeInput } from "../inputs/ExamRecordCreateWithoutGradeInput";
import { ExamRecordUpdateWithoutGradeInput } from "../inputs/ExamRecordUpdateWithoutGradeInput";
import { ExamRecordUpsertWithoutGradeInput } from "../inputs/ExamRecordUpsertWithoutGradeInput";
import { ExamRecordWhereUniqueInput } from "../inputs/ExamRecordWhereUniqueInput";

@TypeGraphQL.InputType("ExamRecordUpdateOneWithoutGradeInput", {
  isAbstract: true
})
export class ExamRecordUpdateOneWithoutGradeInput {
  @TypeGraphQL.Field(_type => ExamRecordCreateWithoutGradeInput, {
    nullable: true
  })
  create?: ExamRecordCreateWithoutGradeInput | undefined;

  @TypeGraphQL.Field(_type => ExamRecordCreateOrConnectWithoutGradeInput, {
    nullable: true
  })
  connectOrCreate?: ExamRecordCreateOrConnectWithoutGradeInput | undefined;

  @TypeGraphQL.Field(_type => ExamRecordUpsertWithoutGradeInput, {
    nullable: true
  })
  upsert?: ExamRecordUpsertWithoutGradeInput | undefined;

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

  @TypeGraphQL.Field(_type => ExamRecordUpdateWithoutGradeInput, {
    nullable: true
  })
  update?: ExamRecordUpdateWithoutGradeInput | undefined;
}
