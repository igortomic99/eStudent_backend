import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExamCreateManyExaminationPeriodInputEnvelope } from "../inputs/ExamCreateManyExaminationPeriodInputEnvelope";
import { ExamCreateOrConnectWithoutExaminationPeriodInput } from "../inputs/ExamCreateOrConnectWithoutExaminationPeriodInput";
import { ExamCreateWithoutExaminationPeriodInput } from "../inputs/ExamCreateWithoutExaminationPeriodInput";
import { ExamScalarWhereInput } from "../inputs/ExamScalarWhereInput";
import { ExamUpdateManyWithWhereWithoutExaminationPeriodInput } from "../inputs/ExamUpdateManyWithWhereWithoutExaminationPeriodInput";
import { ExamUpdateWithWhereUniqueWithoutExaminationPeriodInput } from "../inputs/ExamUpdateWithWhereUniqueWithoutExaminationPeriodInput";
import { ExamUpsertWithWhereUniqueWithoutExaminationPeriodInput } from "../inputs/ExamUpsertWithWhereUniqueWithoutExaminationPeriodInput";
import { ExamWhereUniqueInput } from "../inputs/ExamWhereUniqueInput";

@TypeGraphQL.InputType("ExamUpdateManyWithoutExaminationPeriodInput", {
  isAbstract: true
})
export class ExamUpdateManyWithoutExaminationPeriodInput {
  @TypeGraphQL.Field(_type => [ExamCreateWithoutExaminationPeriodInput], {
    nullable: true
  })
  create?: ExamCreateWithoutExaminationPeriodInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamCreateOrConnectWithoutExaminationPeriodInput], {
    nullable: true
  })
  connectOrCreate?: ExamCreateOrConnectWithoutExaminationPeriodInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamUpsertWithWhereUniqueWithoutExaminationPeriodInput], {
    nullable: true
  })
  upsert?: ExamUpsertWithWhereUniqueWithoutExaminationPeriodInput[] | undefined;

  @TypeGraphQL.Field(_type => ExamCreateManyExaminationPeriodInputEnvelope, {
    nullable: true
  })
  createMany?: ExamCreateManyExaminationPeriodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExamWhereUniqueInput], {
    nullable: true
  })
  set?: ExamWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ExamWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamWhereUniqueInput], {
    nullable: true
  })
  delete?: ExamWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamWhereUniqueInput], {
    nullable: true
  })
  connect?: ExamWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamUpdateWithWhereUniqueWithoutExaminationPeriodInput], {
    nullable: true
  })
  update?: ExamUpdateWithWhereUniqueWithoutExaminationPeriodInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamUpdateManyWithWhereWithoutExaminationPeriodInput], {
    nullable: true
  })
  updateMany?: ExamUpdateManyWithWhereWithoutExaminationPeriodInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExamScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ExamScalarWhereInput[] | undefined;
}
