import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModulCreateWithoutStudentsInput } from "../inputs/ModulCreateWithoutStudentsInput";
import { ModulWhereUniqueInput } from "../inputs/ModulWhereUniqueInput";

@TypeGraphQL.InputType("ModulCreateOrConnectWithoutStudentsInput", {
  isAbstract: true
})
export class ModulCreateOrConnectWithoutStudentsInput {
  @TypeGraphQL.Field(_type => ModulWhereUniqueInput, {
    nullable: false
  })
  where!: ModulWhereUniqueInput;

  @TypeGraphQL.Field(_type => ModulCreateWithoutStudentsInput, {
    nullable: false
  })
  create!: ModulCreateWithoutStudentsInput;
}
