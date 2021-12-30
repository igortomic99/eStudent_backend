import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClassWhereUniqueInput } from "../../../inputs/ClassWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteClassArgs {
  @TypeGraphQL.Field(_type => ClassWhereUniqueInput, {
    nullable: false
  })
  where!: ClassWhereUniqueInput;
}
