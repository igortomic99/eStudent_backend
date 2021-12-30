import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Subject } from "../models/Subject";
import { Role } from "../enums/Role";
import { ProfessorCount } from "../resolvers/outputs/ProfessorCount";

@TypeGraphQL.ObjectType("Professor", {
  isAbstract: true
})
export class Professor {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

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

  subjects?: Subject[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  jmbg!: string;

  @TypeGraphQL.Field(_type => Role, {
    nullable: false
  })
  role!: "ADMIN" | "STUDENT" | "PROFESSOR";

  @TypeGraphQL.Field(_type => ProfessorCount, {
    nullable: true
  })
  _count?: ProfessorCount | null;
}
