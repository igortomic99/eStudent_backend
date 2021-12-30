import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Class } from "../models/Class";
import { ExamRecord } from "../models/ExamRecord";
import { Modul } from "../models/Modul";
import { Role } from "../enums/Role";
import { StudentCount } from "../resolvers/outputs/StudentCount";

@TypeGraphQL.ObjectType("Student", {
  isAbstract: true
})
export class Student {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  middleName!: string;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  brind!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  birthDate!: Date;

  @TypeGraphQL.Field(_type => Role, {
    nullable: false
  })
  role!: "ADMIN" | "STUDENT" | "PROFESSOR";

  modul?: Modul;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  modulID!: string;

  class?: Class;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  classID!: string;

  exams?: ExamRecord[];

  @TypeGraphQL.Field(_type => StudentCount, {
    nullable: true
  })
  _count?: StudentCount | null;
}
