import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectType } from "../../enums/SubjectType";

@TypeGraphQL.ObjectType("SubjectMinAggregate", {
  isAbstract: true
})
export class SubjectMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subjectName!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  espp!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  professorID!: string | null;

  @TypeGraphQL.Field(_type => SubjectType, {
    nullable: true
  })
  type!: "REQUIRED" | "ELECTIVE" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modulID!: string | null;
}
