import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModulCreateOrConnectWithoutSubjectsInput } from "../inputs/ModulCreateOrConnectWithoutSubjectsInput";
import { ModulCreateWithoutSubjectsInput } from "../inputs/ModulCreateWithoutSubjectsInput";
import { ModulWhereUniqueInput } from "../inputs/ModulWhereUniqueInput";

@TypeGraphQL.InputType("ModulCreateNestedOneWithoutSubjectsInput", {
  isAbstract: true
})
export class ModulCreateNestedOneWithoutSubjectsInput {
  @TypeGraphQL.Field(_type => ModulCreateWithoutSubjectsInput, {
    nullable: true
  })
  create?: ModulCreateWithoutSubjectsInput | undefined;

  @TypeGraphQL.Field(_type => ModulCreateOrConnectWithoutSubjectsInput, {
    nullable: true
  })
  connectOrCreate?: ModulCreateOrConnectWithoutSubjectsInput | undefined;

  @TypeGraphQL.Field(_type => ModulWhereUniqueInput, {
    nullable: true
  })
  connect?: ModulWhereUniqueInput | undefined;
}
