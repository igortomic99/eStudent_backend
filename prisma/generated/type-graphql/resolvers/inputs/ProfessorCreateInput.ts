import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectCreateNestedManyWithoutProfessorInput } from "../inputs/SubjectCreateNestedManyWithoutProfessorInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("ProfessorCreateInput", {
  isAbstract: true
})
export class ProfessorCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  jmbg!: string;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role?: "ADMIN" | "STUDENT" | "PROFESSOR" | undefined;

  @TypeGraphQL.Field(_type => SubjectCreateNestedManyWithoutProfessorInput, {
    nullable: true
  })
  subjects?: SubjectCreateNestedManyWithoutProfessorInput | undefined;
}
