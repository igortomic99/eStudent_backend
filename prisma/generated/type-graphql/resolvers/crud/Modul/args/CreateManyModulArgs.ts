import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModulCreateManyInput } from "../../../inputs/ModulCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyModulArgs {
  @TypeGraphQL.Field(_type => [ModulCreateManyInput], {
    nullable: false
  })
  data!: ModulCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
