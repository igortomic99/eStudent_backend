import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModulUpdateManyMutationInput } from "../../../inputs/ModulUpdateManyMutationInput";
import { ModulWhereInput } from "../../../inputs/ModulWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyModulArgs {
  @TypeGraphQL.Field(_type => ModulUpdateManyMutationInput, {
    nullable: false
  })
  data!: ModulUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ModulWhereInput, {
    nullable: true
  })
  where?: ModulWhereInput | undefined;
}
