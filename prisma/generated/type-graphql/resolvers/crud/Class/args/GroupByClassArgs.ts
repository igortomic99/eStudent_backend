import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClassOrderByWithAggregationInput } from "../../../inputs/ClassOrderByWithAggregationInput";
import { ClassScalarWhereWithAggregatesInput } from "../../../inputs/ClassScalarWhereWithAggregatesInput";
import { ClassWhereInput } from "../../../inputs/ClassWhereInput";
import { ClassScalarFieldEnum } from "../../../../enums/ClassScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByClassArgs {
  @TypeGraphQL.Field(_type => ClassWhereInput, {
    nullable: true
  })
  where?: ClassWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ClassOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ClassOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClassScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "classLabel">;

  @TypeGraphQL.Field(_type => ClassScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ClassScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
