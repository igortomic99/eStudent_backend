import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorCreateWithoutSubjectsInput } from "../inputs/ProfessorCreateWithoutSubjectsInput";
import { ProfessorWhereUniqueInput } from "../inputs/ProfessorWhereUniqueInput";

@TypeGraphQL.InputType("ProfessorCreateOrConnectWithoutSubjectsInput", {
  isAbstract: true
})
export class ProfessorCreateOrConnectWithoutSubjectsInput {
  @TypeGraphQL.Field(_type => ProfessorWhereUniqueInput, {
    nullable: false
  })
  where!: ProfessorWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProfessorCreateWithoutSubjectsInput, {
    nullable: false
  })
  create!: ProfessorCreateWithoutSubjectsInput;
}
