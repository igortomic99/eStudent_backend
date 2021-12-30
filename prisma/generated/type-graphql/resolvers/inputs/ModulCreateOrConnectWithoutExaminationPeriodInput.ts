import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModulCreateWithoutExaminationPeriodInput } from "../inputs/ModulCreateWithoutExaminationPeriodInput";
import { ModulWhereUniqueInput } from "../inputs/ModulWhereUniqueInput";

@TypeGraphQL.InputType("ModulCreateOrConnectWithoutExaminationPeriodInput", {
  isAbstract: true
})
export class ModulCreateOrConnectWithoutExaminationPeriodInput {
  @TypeGraphQL.Field(_type => ModulWhereUniqueInput, {
    nullable: false
  })
  where!: ModulWhereUniqueInput;

  @TypeGraphQL.Field(_type => ModulCreateWithoutExaminationPeriodInput, {
    nullable: false
  })
  create!: ModulCreateWithoutExaminationPeriodInput;
}
