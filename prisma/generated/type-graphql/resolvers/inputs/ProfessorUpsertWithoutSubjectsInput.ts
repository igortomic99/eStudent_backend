import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorCreateWithoutSubjectsInput } from "../inputs/ProfessorCreateWithoutSubjectsInput";
import { ProfessorUpdateWithoutSubjectsInput } from "../inputs/ProfessorUpdateWithoutSubjectsInput";

@TypeGraphQL.InputType("ProfessorUpsertWithoutSubjectsInput", {
  isAbstract: true
})
export class ProfessorUpsertWithoutSubjectsInput {
  @TypeGraphQL.Field(_type => ProfessorUpdateWithoutSubjectsInput, {
    nullable: false
  })
  update!: ProfessorUpdateWithoutSubjectsInput;

  @TypeGraphQL.Field(_type => ProfessorCreateWithoutSubjectsInput, {
    nullable: false
  })
  create!: ProfessorCreateWithoutSubjectsInput;
}
