import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubjectUpdateManyMutationInput } from "../../../inputs/SubjectUpdateManyMutationInput";
import { SubjectWhereInput } from "../../../inputs/SubjectWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySubjectArgs {
  @TypeGraphQL.Field(_type => SubjectUpdateManyMutationInput, {
    nullable: false
  })
  data!: SubjectUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SubjectWhereInput, {
    nullable: true
  })
  where?: SubjectWhereInput | undefined;
}
