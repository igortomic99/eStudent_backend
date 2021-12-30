import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModulCreateInput } from "../../../inputs/ModulCreateInput";

@TypeGraphQL.ArgsType()
export class CreateModulArgs {
  @TypeGraphQL.Field(_type => ModulCreateInput, {
    nullable: false
  })
  data!: ModulCreateInput;
}
