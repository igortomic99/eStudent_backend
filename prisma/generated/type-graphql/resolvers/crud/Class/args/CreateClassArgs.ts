import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClassCreateInput } from "../../../inputs/ClassCreateInput";

@TypeGraphQL.ArgsType()
export class CreateClassArgs {
  @TypeGraphQL.Field(_type => ClassCreateInput, {
    nullable: false
  })
  data!: ClassCreateInput;
}
