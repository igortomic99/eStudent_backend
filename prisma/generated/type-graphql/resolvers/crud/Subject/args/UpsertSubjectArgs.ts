import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubjectCreateInput } from "../../../inputs/SubjectCreateInput";
import { SubjectUpdateInput } from "../../../inputs/SubjectUpdateInput";
import { SubjectWhereUniqueInput } from "../../../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSubjectArgs {
  @TypeGraphQL.Field(_type => SubjectWhereUniqueInput, {
    nullable: false
  })
  where!: SubjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubjectCreateInput, {
    nullable: false
  })
  create!: SubjectCreateInput;

  @TypeGraphQL.Field(_type => SubjectUpdateInput, {
    nullable: false
  })
  update!: SubjectUpdateInput;
}
