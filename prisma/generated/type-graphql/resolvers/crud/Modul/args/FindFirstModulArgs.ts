import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModulOrderByWithRelationInput } from "../../../inputs/ModulOrderByWithRelationInput";
import { ModulWhereInput } from "../../../inputs/ModulWhereInput";
import { ModulWhereUniqueInput } from "../../../inputs/ModulWhereUniqueInput";
import { ModulScalarFieldEnum } from "../../../../enums/ModulScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstModulArgs {
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

  @TypeGraphQL.Field(_type => [ModulScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "moduleName" | "moduleCode"> | undefined;
}
