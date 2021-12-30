import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectType } from "../../enums/SubjectType";

@TypeGraphQL.InputType("SubjectCreateManyInput", {
  isAbstract: true
})
export class SubjectCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  subjectName!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  espp!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  professorID!: string;

  @TypeGraphQL.Field(_type => SubjectType, {
    nullable: false
  })
  type!: "REQUIRED" | "ELECTIVE";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  modulID!: string;
}
