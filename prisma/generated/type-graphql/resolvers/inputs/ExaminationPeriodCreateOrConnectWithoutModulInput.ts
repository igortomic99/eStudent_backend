import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExaminationPeriodCreateWithoutModulInput } from "../inputs/ExaminationPeriodCreateWithoutModulInput";
import { ExaminationPeriodWhereUniqueInput } from "../inputs/ExaminationPeriodWhereUniqueInput";

@TypeGraphQL.InputType("ExaminationPeriodCreateOrConnectWithoutModulInput", {
  isAbstract: true
})
export class ExaminationPeriodCreateOrConnectWithoutModulInput {
  @TypeGraphQL.Field(_type => ExaminationPeriodWhereUniqueInput, {
    nullable: false
  })
  where!: ExaminationPeriodWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExaminationPeriodCreateWithoutModulInput, {
    nullable: false
  })
  create!: ExaminationPeriodCreateWithoutModulInput;
}
