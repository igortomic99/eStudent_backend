import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExaminationPeriodCreateWithoutModulInput } from "../inputs/ExaminationPeriodCreateWithoutModulInput";
import { ExaminationPeriodUpdateWithoutModulInput } from "../inputs/ExaminationPeriodUpdateWithoutModulInput";
import { ExaminationPeriodWhereUniqueInput } from "../inputs/ExaminationPeriodWhereUniqueInput";

@TypeGraphQL.InputType("ExaminationPeriodUpsertWithWhereUniqueWithoutModulInput", {
  isAbstract: true
})
export class ExaminationPeriodUpsertWithWhereUniqueWithoutModulInput {
  @TypeGraphQL.Field(_type => ExaminationPeriodWhereUniqueInput, {
    nullable: false
  })
  where!: ExaminationPeriodWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExaminationPeriodUpdateWithoutModulInput, {
    nullable: false
  })
  update!: ExaminationPeriodUpdateWithoutModulInput;

  @TypeGraphQL.Field(_type => ExaminationPeriodCreateWithoutModulInput, {
    nullable: false
  })
  create!: ExaminationPeriodCreateWithoutModulInput;
}
