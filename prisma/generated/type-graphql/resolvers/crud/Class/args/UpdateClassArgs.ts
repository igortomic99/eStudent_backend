import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClassUpdateInput } from "../../../inputs/ClassUpdateInput";
import { ClassWhereUniqueInput } from "../../../inputs/ClassWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateClassArgs {
  @TypeGraphQL.Field(_type => ClassUpdateInput, {
    nullable: false
  })
  data!: ClassUpdateInput;

  @TypeGraphQL.Field(_type => ClassWhereUniqueInput, {
    nullable: false
  })
  where!: ClassWhereUniqueInput;
}
