import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModulUpdateInput } from "../../../inputs/ModulUpdateInput";
import { ModulWhereUniqueInput } from "../../../inputs/ModulWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateModulArgs {
  @TypeGraphQL.Field(_type => ModulUpdateInput, {
    nullable: false
  })
  data!: ModulUpdateInput;

  @TypeGraphQL.Field(_type => ModulWhereUniqueInput, {
    nullable: false
  })
  where!: ModulWhereUniqueInput;
}
