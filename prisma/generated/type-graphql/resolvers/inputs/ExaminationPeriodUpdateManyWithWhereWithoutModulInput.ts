import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExaminationPeriodScalarWhereInput } from "../inputs/ExaminationPeriodScalarWhereInput";
import { ExaminationPeriodUpdateManyMutationInput } from "../inputs/ExaminationPeriodUpdateManyMutationInput";

@TypeGraphQL.InputType("ExaminationPeriodUpdateManyWithWhereWithoutModulInput", {
  isAbstract: true
})
export class ExaminationPeriodUpdateManyWithWhereWithoutModulInput {
  @TypeGraphQL.Field(_type => ExaminationPeriodScalarWhereInput, {
    nullable: false
  })
  where!: ExaminationPeriodScalarWhereInput;

  @TypeGraphQL.Field(_type => ExaminationPeriodUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExaminationPeriodUpdateManyMutationInput;
}
