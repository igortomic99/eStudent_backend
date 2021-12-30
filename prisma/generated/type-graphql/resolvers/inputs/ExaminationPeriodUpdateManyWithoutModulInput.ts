import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExaminationPeriodCreateManyModulInputEnvelope } from "../inputs/ExaminationPeriodCreateManyModulInputEnvelope";
import { ExaminationPeriodCreateOrConnectWithoutModulInput } from "../inputs/ExaminationPeriodCreateOrConnectWithoutModulInput";
import { ExaminationPeriodCreateWithoutModulInput } from "../inputs/ExaminationPeriodCreateWithoutModulInput";
import { ExaminationPeriodScalarWhereInput } from "../inputs/ExaminationPeriodScalarWhereInput";
import { ExaminationPeriodUpdateManyWithWhereWithoutModulInput } from "../inputs/ExaminationPeriodUpdateManyWithWhereWithoutModulInput";
import { ExaminationPeriodUpdateWithWhereUniqueWithoutModulInput } from "../inputs/ExaminationPeriodUpdateWithWhereUniqueWithoutModulInput";
import { ExaminationPeriodUpsertWithWhereUniqueWithoutModulInput } from "../inputs/ExaminationPeriodUpsertWithWhereUniqueWithoutModulInput";
import { ExaminationPeriodWhereUniqueInput } from "../inputs/ExaminationPeriodWhereUniqueInput";

@TypeGraphQL.InputType("ExaminationPeriodUpdateManyWithoutModulInput", {
  isAbstract: true
})
export class ExaminationPeriodUpdateManyWithoutModulInput {
  @TypeGraphQL.Field(_type => [ExaminationPeriodCreateWithoutModulInput], {
    nullable: true
  })
  create?: ExaminationPeriodCreateWithoutModulInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExaminationPeriodCreateOrConnectWithoutModulInput], {
    nullable: true
  })
  connectOrCreate?: ExaminationPeriodCreateOrConnectWithoutModulInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExaminationPeriodUpsertWithWhereUniqueWithoutModulInput], {
    nullable: true
  })
  upsert?: ExaminationPeriodUpsertWithWhereUniqueWithoutModulInput[] | undefined;

  @TypeGraphQL.Field(_type => ExaminationPeriodCreateManyModulInputEnvelope, {
    nullable: true
  })
  createMany?: ExaminationPeriodCreateManyModulInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExaminationPeriodWhereUniqueInput], {
    nullable: true
  })
  set?: ExaminationPeriodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExaminationPeriodWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ExaminationPeriodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExaminationPeriodWhereUniqueInput], {
    nullable: true
  })
  delete?: ExaminationPeriodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExaminationPeriodWhereUniqueInput], {
    nullable: true
  })
  connect?: ExaminationPeriodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExaminationPeriodUpdateWithWhereUniqueWithoutModulInput], {
    nullable: true
  })
  update?: ExaminationPeriodUpdateWithWhereUniqueWithoutModulInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExaminationPeriodUpdateManyWithWhereWithoutModulInput], {
    nullable: true
  })
  updateMany?: ExaminationPeriodUpdateManyWithWhereWithoutModulInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExaminationPeriodScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ExaminationPeriodScalarWhereInput[] | undefined;
}
