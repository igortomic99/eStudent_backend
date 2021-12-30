import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateManyClassInputEnvelope } from "../inputs/StudentCreateManyClassInputEnvelope";
import { StudentCreateOrConnectWithoutClassInput } from "../inputs/StudentCreateOrConnectWithoutClassInput";
import { StudentCreateWithoutClassInput } from "../inputs/StudentCreateWithoutClassInput";
import { StudentScalarWhereInput } from "../inputs/StudentScalarWhereInput";
import { StudentUpdateManyWithWhereWithoutClassInput } from "../inputs/StudentUpdateManyWithWhereWithoutClassInput";
import { StudentUpdateWithWhereUniqueWithoutClassInput } from "../inputs/StudentUpdateWithWhereUniqueWithoutClassInput";
import { StudentUpsertWithWhereUniqueWithoutClassInput } from "../inputs/StudentUpsertWithWhereUniqueWithoutClassInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType("StudentUpdateManyWithoutClassInput", {
  isAbstract: true
})
export class StudentUpdateManyWithoutClassInput {
  @TypeGraphQL.Field(_type => [StudentCreateWithoutClassInput], {
    nullable: true
  })
  create?: StudentCreateWithoutClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentCreateOrConnectWithoutClassInput], {
    nullable: true
  })
  connectOrCreate?: StudentCreateOrConnectWithoutClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentUpsertWithWhereUniqueWithoutClassInput], {
    nullable: true
  })
  upsert?: StudentUpsertWithWhereUniqueWithoutClassInput[] | undefined;

  @TypeGraphQL.Field(_type => StudentCreateManyClassInputEnvelope, {
    nullable: true
  })
  createMany?: StudentCreateManyClassInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StudentWhereUniqueInput], {
    nullable: true
  })
  set?: StudentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: StudentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentWhereUniqueInput], {
    nullable: true
  })
  delete?: StudentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentWhereUniqueInput], {
    nullable: true
  })
  connect?: StudentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentUpdateWithWhereUniqueWithoutClassInput], {
    nullable: true
  })
  update?: StudentUpdateWithWhereUniqueWithoutClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentUpdateManyWithWhereWithoutClassInput], {
    nullable: true
  })
  updateMany?: StudentUpdateManyWithWhereWithoutClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: StudentScalarWhereInput[] | undefined;
}
