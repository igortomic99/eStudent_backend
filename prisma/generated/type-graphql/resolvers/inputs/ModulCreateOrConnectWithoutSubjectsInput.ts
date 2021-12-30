import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModulCreateWithoutSubjectsInput } from "../inputs/ModulCreateWithoutSubjectsInput";
import { ModulWhereUniqueInput } from "../inputs/ModulWhereUniqueInput";

@TypeGraphQL.InputType("ModulCreateOrConnectWithoutSubjectsInput", {
  isAbstract: true
})
export class ModulCreateOrConnectWithoutSubjectsInput {
  @TypeGraphQL.Field(_type => ModulWhereUniqueInput, {
    nullable: false
  })
  where!: ModulWhereUniqueInput;

  @TypeGraphQL.Field(_type => ModulCreateWithoutSubjectsInput, {
    nullable: false
  })
  create!: ModulCreateWithoutSubjectsInput;
}
