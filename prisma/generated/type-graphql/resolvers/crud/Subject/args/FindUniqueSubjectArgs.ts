import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubjectWhereUniqueInput } from "../../../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSubjectArgs {
  @TypeGraphQL.Field(_type => SubjectWhereUniqueInput, {
    nullable: false
  })
  where!: SubjectWhereUniqueInput;
}
