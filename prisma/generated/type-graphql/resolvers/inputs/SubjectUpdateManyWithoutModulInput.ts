import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateManyModulInputEnvelope } from "../inputs/SubjectCreateManyModulInputEnvelope";
import { SubjectCreateOrConnectWithoutModulInput } from "../inputs/SubjectCreateOrConnectWithoutModulInput";
import { SubjectCreateWithoutModulInput } from "../inputs/SubjectCreateWithoutModulInput";
import { SubjectScalarWhereInput } from "../inputs/SubjectScalarWhereInput";
import { SubjectUpdateManyWithWhereWithoutModulInput } from "../inputs/SubjectUpdateManyWithWhereWithoutModulInput";
import { SubjectUpdateWithWhereUniqueWithoutModulInput } from "../inputs/SubjectUpdateWithWhereUniqueWithoutModulInput";
import { SubjectUpsertWithWhereUniqueWithoutModulInput } from "../inputs/SubjectUpsertWithWhereUniqueWithoutModulInput";
import { SubjectWhereUniqueInput } from "../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.InputType("SubjectUpdateManyWithoutModulInput", {
  isAbstract: true
})
export class SubjectUpdateManyWithoutModulInput {
  @TypeGraphQL.Field(_type => [SubjectCreateWithoutModulInput], {
    nullable: true
  })
  create?: SubjectCreateWithoutModulInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectCreateOrConnectWithoutModulInput], {
    nullable: true
  })
  connectOrCreate?: SubjectCreateOrConnectWithoutModulInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectUpsertWithWhereUniqueWithoutModulInput], {
    nullable: true
  })
  upsert?: SubjectUpsertWithWhereUniqueWithoutModulInput[] | undefined;

  @TypeGraphQL.Field(_type => SubjectCreateManyModulInputEnvelope, {
    nullable: true
  })
  createMany?: SubjectCreateManyModulInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SubjectWhereUniqueInput], {
    nullable: true
  })
  set?: SubjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SubjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectWhereUniqueInput], {
    nullable: true
  })
  delete?: SubjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectWhereUniqueInput], {
    nullable: true
  })
  connect?: SubjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectUpdateWithWhereUniqueWithoutModulInput], {
    nullable: true
  })
  update?: SubjectUpdateWithWhereUniqueWithoutModulInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectUpdateManyWithWhereWithoutModulInput], {
    nullable: true
  })
  updateMany?: SubjectUpdateManyWithWhereWithoutModulInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SubjectScalarWhereInput[] | undefined;
}
