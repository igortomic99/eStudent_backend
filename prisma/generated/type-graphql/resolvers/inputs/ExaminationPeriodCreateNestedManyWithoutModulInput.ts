import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExaminationPeriodCreateManyModulInputEnvelope } from "../inputs/ExaminationPeriodCreateManyModulInputEnvelope";
import { ExaminationPeriodCreateOrConnectWithoutModulInput } from "../inputs/ExaminationPeriodCreateOrConnectWithoutModulInput";
import { ExaminationPeriodCreateWithoutModulInput } from "../inputs/ExaminationPeriodCreateWithoutModulInput";
import { ExaminationPeriodWhereUniqueInput } from "../inputs/ExaminationPeriodWhereUniqueInput";

@TypeGraphQL.InputType("ExaminationPeriodCreateNestedManyWithoutModulInput", {
  isAbstract: true
})
export class ExaminationPeriodCreateNestedManyWithoutModulInput {
  @TypeGraphQL.Field(_type => [ExaminationPeriodCreateWithoutModulInput], {
    nullable: true
  })
  create?: ExaminationPeriodCreateWithoutModulInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExaminationPeriodCreateOrConnectWithoutModulInput], {
    nullable: true
  })
  connectOrCreate?: ExaminationPeriodCreateOrConnectWithoutModulInput[] | undefined;

  @TypeGraphQL.Field(_type => ExaminationPeriodCreateManyModulInputEnvelope, {
    nullable: true
  })
  createMany?: ExaminationPeriodCreateManyModulInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExaminationPeriodWhereUniqueInput], {
    nullable: true
  })
  connect?: ExaminationPeriodWhereUniqueInput[] | undefined;
}
