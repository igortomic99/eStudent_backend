import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudentCreateManyModulInputEnvelope } from "../inputs/StudentCreateManyModulInputEnvelope";
import { StudentCreateOrConnectWithoutModulInput } from "../inputs/StudentCreateOrConnectWithoutModulInput";
import { StudentCreateWithoutModulInput } from "../inputs/StudentCreateWithoutModulInput";
import { StudentScalarWhereInput } from "../inputs/StudentScalarWhereInput";
import { StudentUpdateManyWithWhereWithoutModulInput } from "../inputs/StudentUpdateManyWithWhereWithoutModulInput";
import { StudentUpdateWithWhereUniqueWithoutModulInput } from "../inputs/StudentUpdateWithWhereUniqueWithoutModulInput";
import { StudentUpsertWithWhereUniqueWithoutModulInput } from "../inputs/StudentUpsertWithWhereUniqueWithoutModulInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";

@TypeGraphQL.InputType("StudentUpdateManyWithoutModulInput", {
  isAbstract: true
})
export class StudentUpdateManyWithoutModulInput {
  @TypeGraphQL.Field(_type => [StudentCreateWithoutModulInput], {
    nullable: true
  })
  create?: StudentCreateWithoutModulInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentCreateOrConnectWithoutModulInput], {
    nullable: true
  })
  connectOrCreate?: StudentCreateOrConnectWithoutModulInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentUpsertWithWhereUniqueWithoutModulInput], {
    nullable: true
  })
  upsert?: StudentUpsertWithWhereUniqueWithoutModulInput[] | undefined;

  @TypeGraphQL.Field(_type => StudentCreateManyModulInputEnvelope, {
    nullable: true
  })
  createMany?: StudentCreateManyModulInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [StudentUpdateWithWhereUniqueWithoutModulInput], {
    nullable: true
  })
  update?: StudentUpdateWithWhereUniqueWithoutModulInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentUpdateManyWithWhereWithoutModulInput], {
    nullable: true
  })
  updateMany?: StudentUpdateManyWithWhereWithoutModulInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: StudentScalarWhereInput[] | undefined;
}
