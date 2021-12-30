import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExaminationPeriodCreateWithoutExamsInput } from "../inputs/ExaminationPeriodCreateWithoutExamsInput";
import { ExaminationPeriodWhereUniqueInput } from "../inputs/ExaminationPeriodWhereUniqueInput";

@TypeGraphQL.InputType("ExaminationPeriodCreateOrConnectWithoutExamsInput", {
  isAbstract: true
})
export class ExaminationPeriodCreateOrConnectWithoutExamsInput {
  @TypeGraphQL.Field(_type => ExaminationPeriodWhereUniqueInput, {
    nullable: false
  })
  where!: ExaminationPeriodWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExaminationPeriodCreateWithoutExamsInput, {
    nullable: false
  })
  create!: ExaminationPeriodCreateWithoutExamsInput;
}
