import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Exam } from "../models/Exam";
import { Modul } from "../models/Modul";
import { ExaminationPeriodCount } from "../resolvers/outputs/ExaminationPeriodCount";

@TypeGraphQL.ObjectType("ExaminationPeriod", {
  isAbstract: true
})
export class ExaminationPeriod {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  beginningDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  endDate!: Date;

  modul?: Modul | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modulID?: string | null;

  exams?: Exam[];

  @TypeGraphQL.Field(_type => ExaminationPeriodCount, {
    nullable: true
  })
  _count?: ExaminationPeriodCount | null;
}
