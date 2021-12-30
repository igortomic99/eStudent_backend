import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ExaminationPeriod } from "../models/ExaminationPeriod";
import { Student } from "../models/Student";
import { Subject } from "../models/Subject";
import { ModulCount } from "../resolvers/outputs/ModulCount";

@TypeGraphQL.ObjectType("Modul", {
  isAbstract: true
})
export class Modul {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  moduleName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  moduleCode!: string;

  students?: Student[];

  subjects?: Subject[];

  examinationPeriod?: ExaminationPeriod[];

  @TypeGraphQL.Field(_type => ModulCount, {
    nullable: true
  })
  _count?: ModulCount | null;
}
