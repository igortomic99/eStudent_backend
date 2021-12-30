import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Exam } from "../models/Exam";
import { Modul } from "../models/Modul";
import { Professor } from "../models/Professor";
import { SubjectType } from "../enums/SubjectType";

@TypeGraphQL.ObjectType("Subject", {
  isAbstract: true
})
export class Subject {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  subjectName!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  espp!: number;

  professor?: Professor;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  professorID!: string;

  exam?: Exam | null;

  @TypeGraphQL.Field(_type => SubjectType, {
    nullable: false
  })
  type!: "REQUIRED" | "ELECTIVE";

  modul?: Modul;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  modulID!: string;
}
