import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ModulWhereUniqueInput", {
  isAbstract: true
})
export class ModulWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  moduleName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  moduleCode?: string | undefined;
}
