import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClassOrderByWithRelationInput } from "../../../inputs/ClassOrderByWithRelationInput";
import { ClassWhereInput } from "../../../inputs/ClassWhereInput";
import { ClassWhereUniqueInput } from "../../../inputs/ClassWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateClassArgs {
  @TypeGraphQL.Field(_type => ClassWhereInput, {
    nullable: true
  })
  where?: ClassWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ClassOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ClassOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ClassWhereUniqueInput, {
    nullable: true
  })
  cursor?: ClassWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
