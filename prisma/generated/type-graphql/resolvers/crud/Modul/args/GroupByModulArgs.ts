import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModulOrderByWithAggregationInput } from "../../../inputs/ModulOrderByWithAggregationInput";
import { ModulScalarWhereWithAggregatesInput } from "../../../inputs/ModulScalarWhereWithAggregatesInput";
import { ModulWhereInput } from "../../../inputs/ModulWhereInput";
import { ModulScalarFieldEnum } from "../../../../enums/ModulScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByModulArgs {
  @TypeGraphQL.Field(_type => ModulWhereInput, {
    nullable: true
  })
  where?: ModulWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ModulOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ModulOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ModulScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "moduleName" | "moduleCode">;

  @TypeGraphQL.Field(_type => ModulScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ModulScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
