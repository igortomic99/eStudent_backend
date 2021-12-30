import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateWithoutProfessorInput } from "../inputs/SubjectCreateWithoutProfessorInput";
import { SubjectUpdateWithoutProfessorInput } from "../inputs/SubjectUpdateWithoutProfessorInput";
import { SubjectWhereUniqueInput } from "../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.InputType("SubjectUpsertWithWhereUniqueWithoutProfessorInput", {
  isAbstract: true
})
export class SubjectUpsertWithWhereUniqueWithoutProfessorInput {
  @TypeGraphQL.Field(_type => SubjectWhereUniqueInput, {
    nullable: false
  })
  where!: SubjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubjectUpdateWithoutProfessorInput, {
    nullable: false
  })
  update!: SubjectUpdateWithoutProfessorInput;

  @TypeGraphQL.Field(_type => SubjectCreateWithoutProfessorInput, {
    nullable: false
  })
  create!: SubjectCreateWithoutProfessorInput;
}
