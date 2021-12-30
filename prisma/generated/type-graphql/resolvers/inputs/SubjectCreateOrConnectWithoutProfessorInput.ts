import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateWithoutProfessorInput } from "../inputs/SubjectCreateWithoutProfessorInput";
import { SubjectWhereUniqueInput } from "../inputs/SubjectWhereUniqueInput";

@TypeGraphQL.InputType("SubjectCreateOrConnectWithoutProfessorInput", {
  isAbstract: true
})
export class SubjectCreateOrConnectWithoutProfessorInput {
  @TypeGraphQL.Field(_type => SubjectWhereUniqueInput, {
    nullable: false
  })
  where!: SubjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubjectCreateWithoutProfessorInput, {
    nullable: false
  })
  create!: SubjectCreateWithoutProfessorInput;
}
