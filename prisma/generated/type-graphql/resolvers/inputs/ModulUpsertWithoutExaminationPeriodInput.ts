import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModulCreateWithoutExaminationPeriodInput } from "../inputs/ModulCreateWithoutExaminationPeriodInput";
import { ModulUpdateWithoutExaminationPeriodInput } from "../inputs/ModulUpdateWithoutExaminationPeriodInput";

@TypeGraphQL.InputType("ModulUpsertWithoutExaminationPeriodInput", {
  isAbstract: true
})
export class ModulUpsertWithoutExaminationPeriodInput {
  @TypeGraphQL.Field(_type => ModulUpdateWithoutExaminationPeriodInput, {
    nullable: false
  })
  update!: ModulUpdateWithoutExaminationPeriodInput;

  @TypeGraphQL.Field(_type => ModulCreateWithoutExaminationPeriodInput, {
    nullable: false
  })
  create!: ModulCreateWithoutExaminationPeriodInput;
}
