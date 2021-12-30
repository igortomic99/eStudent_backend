import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectUpdateWithoutProfessorInput } from "../inputs/SubjectUpdateWithoutProfessorInput";
import { SubjectWhereUniqueInput } from "../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.InputType("SubjectUpdateWithWhereUniqueWithoutProfessorInput", {
  isAbstract: true
})
export class SubjectUpdateWithWhereUniqueWithoutProfessorInput {
  @TypeGraphQL.Field(_type => SubjectWhereUniqueInput, {
    nullable: false
  })
  where!: SubjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubjectUpdateWithoutProfessorInput, {
    nullable: false
  })
  data!: SubjectUpdateWithoutProfessorInput;
}
