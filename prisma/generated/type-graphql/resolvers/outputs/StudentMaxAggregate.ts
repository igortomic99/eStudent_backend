import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Role } from "../../enums/Role";

@TypeGraphQL.ObjectType("StudentMaxAggregate", {
  isAbstract: true
})
export class StudentMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  firstName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  middleName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jmbg!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  brind!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  birthDate!: Date | null;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role!: "ADMIN" | "STUDENT" | "PROFESSOR" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modulID!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  classID!: string | null;
}
