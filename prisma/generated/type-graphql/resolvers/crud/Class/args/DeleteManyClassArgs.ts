import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClassWhereInput } from "../../../inputs/ClassWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyClassArgs {
  @TypeGraphQL.Field(_type => ClassWhereInput, {
    nullable: true
  })
  where?: ClassWhereInput | undefined;
}
