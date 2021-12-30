import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModulCreateOrConnectWithoutStudentsInput } from "../inputs/ModulCreateOrConnectWithoutStudentsInput";
import { ModulCreateWithoutStudentsInput } from "../inputs/ModulCreateWithoutStudentsInput";
import { ModulWhereUniqueInput } from "../inputs/ModulWhereUniqueInput";

@TypeGraphQL.InputType("ModulCreateNestedOneWithoutStudentsInput", {
  isAbstract: true
})
export class ModulCreateNestedOneWithoutStudentsInput {
  @TypeGraphQL.Field(_type => ModulCreateWithoutStudentsInput, {
    nullable: true
  })
  create?: ModulCreateWithoutStudentsInput | undefined;

  @TypeGraphQL.Field(_type => ModulCreateOrConnectWithoutStudentsInput, {
    nullable: true
  })
  connectOrCreate?: ModulCreateOrConnectWithoutStudentsInput | undefined;

  @TypeGraphQL.Field(_type => ModulWhereUniqueInput, {
    nullable: true
  })
  connect?: ModulWhereUniqueInput | undefined;
}
