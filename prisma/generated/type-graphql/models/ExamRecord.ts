import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Exam } from "../models/Exam";
import { Grade } from "../models/Grade";
import { Student } from "../models/Student";

@TypeGraphQL.ObjectType("ExamRecord", {
  isAbstract: true
})
export class ExamRecord {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  points!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  passed!: boolean;

  grade?: Grade | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  gradeID?: string | null;

  exam?: Exam | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  examID?: string | null;

  student?: Student | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  studentID?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  singed!: boolean;
}
