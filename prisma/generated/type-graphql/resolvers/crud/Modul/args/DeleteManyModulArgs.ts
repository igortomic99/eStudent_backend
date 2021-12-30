import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModulWhereInput } from "../../../inputs/ModulWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyModulArgs {
  @TypeGraphQL.Field(_type => ModulWhereInput, {
    nullable: true
  })
  where?: ModulWhereInput | undefined;
}
