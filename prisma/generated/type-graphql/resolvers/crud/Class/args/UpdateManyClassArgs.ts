import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClassUpdateManyMutationInput } from "../../../inputs/ClassUpdateManyMutationInput";
import { ClassWhereInput } from "../../../inputs/ClassWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyClassArgs {
  @TypeGraphQL.Field(_type => ClassUpdateManyMutationInput, {
    nullable: false
  })
  data!: ClassUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ClassWhereInput, {
    nullable: true
  })
  where?: ClassWhereInput | undefined;
}
