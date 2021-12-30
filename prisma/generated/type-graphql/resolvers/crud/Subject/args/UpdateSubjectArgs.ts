import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubjectUpdateInput } from "../../../inputs/SubjectUpdateInput";
import { SubjectWhereUniqueInput } from "../../../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSubjectArgs {
  @TypeGraphQL.Field(_type => SubjectUpdateInput, {
    nullable: false
  })
  data!: SubjectUpdateInput;

  @TypeGraphQL.Field(_type => SubjectWhereUniqueInput, {
    nullable: false
  })
  where!: SubjectWhereUniqueInput;
}
