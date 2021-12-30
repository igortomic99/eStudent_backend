import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModulCreateOrConnectWithoutExaminationPeriodInput } from "../inputs/ModulCreateOrConnectWithoutExaminationPeriodInput";
import { ModulCreateWithoutExaminationPeriodInput } from "../inputs/ModulCreateWithoutExaminationPeriodInput";
import { ModulWhereUniqueInput } from "../inputs/ModulWhereUniqueInput";

@TypeGraphQL.InputType("ModulCreateNestedOneWithoutExaminationPeriodInput", {
  isAbstract: true
})
export class ModulCreateNestedOneWithoutExaminationPeriodInput {
  @TypeGraphQL.Field(_type => ModulCreateWithoutExaminationPeriodInput, {
    nullable: true
  })
  create?: ModulCreateWithoutExaminationPeriodInput | undefined;

  @TypeGraphQL.Field(_type => ModulCreateOrConnectWithoutExaminationPeriodInput, {
    nullable: true
  })
  connectOrCreate?: ModulCreateOrConnectWithoutExaminationPeriodInput | undefined;

  @TypeGraphQL.Field(_type => ModulWhereUniqueInput, {
    nullable: true
  })
  connect?: ModulWhereUniqueInput | undefined;
}
