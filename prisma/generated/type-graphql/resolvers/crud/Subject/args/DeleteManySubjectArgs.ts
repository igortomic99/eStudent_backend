import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubjectWhereInput } from "../../../inputs/SubjectWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySubjectArgs {
  @TypeGraphQL.Field(_type => SubjectWhereInput, {
    nullable: true
  })
  where?: SubjectWhereInput | undefined;
}
