import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModulCreateInput } from "../../../inputs/ModulCreateInput";
import { ModulUpdateInput } from "../../../inputs/ModulUpdateInput";
import { ModulWhereUniqueInput } from "../../../inputs/ModulWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertModulArgs {
  @TypeGraphQL.Field(_type => ModulWhereUniqueInput, {
    nullable: false
  })
  where!: ModulWhereUniqueInput;

  @TypeGraphQL.Field(_type => ModulCreateInput, {
    nullable: false
  })
  create!: ModulCreateInput;

  @TypeGraphQL.Field(_type => ModulUpdateInput, {
    nullable: false
  })
  update!: ModulUpdateInput;
}
