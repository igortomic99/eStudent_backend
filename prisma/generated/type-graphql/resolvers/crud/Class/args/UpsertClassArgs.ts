import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClassCreateInput } from "../../../inputs/ClassCreateInput";
import { ClassUpdateInput } from "../../../inputs/ClassUpdateInput";
import { ClassWhereUniqueInput } from "../../../inputs/ClassWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertClassArgs {
  @TypeGraphQL.Field(_type => ClassWhereUniqueInput, {
    nullable: false
  })
  where!: ClassWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClassCreateInput, {
    nullable: false
  })
  create!: ClassCreateInput;

  @TypeGraphQL.Field(_type => ClassUpdateInput, {
    nullable: false
  })
  update!: ClassUpdateInput;
}
