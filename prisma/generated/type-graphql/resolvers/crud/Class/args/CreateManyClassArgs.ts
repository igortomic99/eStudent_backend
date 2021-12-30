import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClassCreateManyInput } from "../../../inputs/ClassCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyClassArgs {
  @TypeGraphQL.Field(_type => [ClassCreateManyInput], {
    nullable: false
  })
  data!: ClassCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
