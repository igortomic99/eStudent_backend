import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExaminationPeriodUpdateWithoutModulInput } from "../inputs/ExaminationPeriodUpdateWithoutModulInput";
import { ExaminationPeriodWhereUniqueInput } from "../inputs/ExaminationPeriodWhereUniqueInput";

@TypeGraphQL.InputType("ExaminationPeriodUpdateWithWhereUniqueWithoutModulInput", {
  isAbstract: true
})
export class ExaminationPeriodUpdateWithWhereUniqueWithoutModulInput {
  @TypeGraphQL.Field(_type => ExaminationPeriodWhereUniqueInput, {
    nullable: false
  })
  where!: ExaminationPeriodWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExaminationPeriodUpdateWithoutModulInput, {
    nullable: false
  })
  data!: ExaminationPeriodUpdateWithoutModulInput;
}
