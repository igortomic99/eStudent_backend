import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ExamRecord } from "../models/ExamRecord";
import { ExaminationPeriod } from "../models/ExaminationPeriod";
import { Subject } from "../models/Subject";

@TypeGraphQL.ObjectType("Exam", {
  isAbstract: true
})
export class Exam {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  subject?: Subject | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subjectID?: string | null;

  examinationPeriod?: ExaminationPeriod | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  exPeriodID?: string | null;

  examRecord?: ExamRecord | null;
}
