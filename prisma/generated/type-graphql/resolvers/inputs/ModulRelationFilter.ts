import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModulWhereInput } from "../inputs/ModulWhereInput";

@TypeGraphQL.InputType("ModulRelationFilter", {
  isAbstract: true
})
export class ModulRelationFilter {
  @TypeGraphQL.Field(_type => ModulWhereInput, {
    nullable: true
  })
  is?: ModulWhereInput | undefined;

  @TypeGraphQL.Field(_type => ModulWhereInput, {
    nullable: true
  })
  isNot?: ModulWhereInput | undefined;
}
