import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModulWhereUniqueInput } from "../../../inputs/ModulWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteModulArgs {
  @TypeGraphQL.Field(_type => ModulWhereUniqueInput, {
    nullable: false
  })
  where!: ModulWhereUniqueInput;
}
