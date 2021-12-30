import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubjectCreateInput } from "../../../inputs/SubjectCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSubjectArgs {
  @TypeGraphQL.Field(_type => SubjectCreateInput, {
    nullable: false
  })
  data!: SubjectCreateInput;
}
