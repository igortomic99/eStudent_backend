import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModulOrderByWithRelationInput } from "../../../inputs/ModulOrderByWithRelationInput";
import { ModulWhereInput } from "../../../inputs/ModulWhereInput";
import { ModulWhereUniqueInput } from "../../../inputs/ModulWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateModulArgs {
  @TypeGraphQL.Field(_type => ModulWhereInput, {
    nullable: true
  })
  where?: ModulWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ModulOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ModulOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ModulWhereUniqueInput, {
    nullable: true
  })
  cursor?: ModulWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
