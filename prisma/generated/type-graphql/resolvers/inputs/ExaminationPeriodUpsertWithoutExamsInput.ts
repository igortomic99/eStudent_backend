import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExaminationPeriodCreateWithoutExamsInput } from "../inputs/ExaminationPeriodCreateWithoutExamsInput";
import { ExaminationPeriodUpdateWithoutExamsInput } from "../inputs/ExaminationPeriodUpdateWithoutExamsInput";

@TypeGraphQL.InputType("ExaminationPeriodUpsertWithoutExamsInput", {
  isAbstract: true
})
export class ExaminationPeriodUpsertWithoutExamsInput {
  @TypeGraphQL.Field(_type => ExaminationPeriodUpdateWithoutExamsInput, {
    nullable: false
  })
  update!: ExaminationPeriodUpdateWithoutExamsInput;

  @TypeGraphQL.Field(_type => ExaminationPeriodCreateWithoutExamsInput, {
    nullable: false
  })
  create!: ExaminationPeriodCreateWithoutExamsInput;
}
