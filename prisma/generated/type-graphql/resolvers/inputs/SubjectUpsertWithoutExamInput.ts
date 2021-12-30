import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateWithoutExamInput } from "../inputs/SubjectCreateWithoutExamInput";
import { SubjectUpdateWithoutExamInput } from "../inputs/SubjectUpdateWithoutExamInput";

@TypeGraphQL.InputType("SubjectUpsertWithoutExamInput", {
  isAbstract: true
})
export class SubjectUpsertWithoutExamInput {
  @TypeGraphQL.Field(_type => SubjectUpdateWithoutExamInput, {
    nullable: false
  })
  update!: SubjectUpdateWithoutExamInput;

  @TypeGraphQL.Field(_type => SubjectCreateWithoutExamInput, {
    nullable: false
  })
  create!: SubjectCreateWithoutExamInput;
}
