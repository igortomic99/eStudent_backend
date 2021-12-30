import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExaminationPeriodCreateOrConnectWithoutExamsInput } from "../inputs/ExaminationPeriodCreateOrConnectWithoutExamsInput";
import { ExaminationPeriodCreateWithoutExamsInput } from "../inputs/ExaminationPeriodCreateWithoutExamsInput";
import { ExaminationPeriodWhereUniqueInput } from "../inputs/ExaminationPeriodWhereUniqueInput";

@TypeGraphQL.InputType("ExaminationPeriodCreateNestedOneWithoutExamsInput", {
  isAbstract: true
})
export class ExaminationPeriodCreateNestedOneWithoutExamsInput {
  @TypeGraphQL.Field(_type => ExaminationPeriodCreateWithoutExamsInput, {
    nullable: true
  })
  create?: ExaminationPeriodCreateWithoutExamsInput | undefined;

  @TypeGraphQL.Field(_type => ExaminationPeriodCreateOrConnectWithoutExamsInput, {
    nullable: true
  })
  connectOrCreate?: ExaminationPeriodCreateOrConnectWithoutExamsInput | undefined;

  @TypeGraphQL.Field(_type => ExaminationPeriodWhereUniqueInput, {
    nullable: true
  })
  connect?: ExaminationPeriodWhereUniqueInput | undefined;
}
