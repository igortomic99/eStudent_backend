import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubjectCreateManyInput } from "../../../inputs/SubjectCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySubjectArgs {
  @TypeGraphQL.Field(_type => [SubjectCreateManyInput], {
    nullable: false
  })
  data!: SubjectCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
